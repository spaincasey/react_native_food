import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
        console.log(result);
    };
    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    };

    return (
        <View>
            <Text style={styles.title}>{result.name}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }} />
                }}
            />
            <Text style={styles.results}>Price: {result.price}</Text>
            <Text style={styles.results}>Rating: {result.rating}</Text>
            <Text style={styles.results}># of Reviews: {result.review_count}</Text>
            <Text style={styles.results}>Address: {result.location.address1}</Text>
            <Text style={styles.results}>Phone #: {result.display_phone}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
        marginLeft: 15,
        marginBottom: 5
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,
        marginTop: 15
    },
    results: {
        fontSize: 16,
        marginLeft: 15,
        marginBottom: 5,
        marginTop: 5
    }
});

export default ResultsShowScreen;