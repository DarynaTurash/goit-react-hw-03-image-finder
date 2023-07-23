// import axios from 'axios';



// export const getMaterials = async (searchQuery) => {
//     const response = await axios.get('', {
//         params: {
//             key: API_KEY,
//             q: searchQuery,
//         }
//     });
//     return response.data;
// };


export const getMaterials = async (searchQuery) => {
    const API_KEY = '36806904-a94ef5850b37be256607932e3'
    const baseURL = 'https://pixabay.com/api/?';
    try {
      const response = await fetch(`${baseURL}key=${API_KEY}&q=${searchQuery}`);
      const data = await response.json();
      return data.hits;
    } catch (error) {
      console.error('Error fetching materials:', error);
      throw error;
    }
  };