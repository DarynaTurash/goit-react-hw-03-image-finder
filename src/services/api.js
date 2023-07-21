import axios from 'axios';

const API_KEY = '36806904-a94ef5850b37be256607932e3'

axios.defaults.baseURL = 'https://pixabay.com/api/?';

export const getMaterials = async (searchQuery) => {
    const response = await axios.get('', {
        params: {
            key: API_KEY,
            q: searchQuery,
        }
    });
    return response.data;
};