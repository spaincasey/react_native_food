import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer a-tASZi5oKrEajSzl6KImjewQx1FkKyXor9f6vEutIrEBjAHLtnfNbsEVBM5qIQzqbUwOW-b4STUYhl8y3z_Mla6IGK9MGtXU60LLDPw5mGag6nqu2IElgTYyRu3X3Yx'
    }
});

// Client ID
// 52jsXfPeCQXRpI1LI6UgrQ

// API Key
// a-tASZi5oKrEajSzl6KImjewQx1FkKyXor9f6vEutIrEBjAHLtnfNbsEVBM5qIQzqbUwOW-b4STUYhl8y3z_Mla6IGK9MGtXU60LLDPw5mGag6nqu2IElgTYyRu3X3Yx