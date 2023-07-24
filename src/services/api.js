import Notiflix from 'notiflix';



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

      if(data.hits.length === 0) {
        Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
      } else if(searchQuery === "") {
        Notiflix.Notify.warning('Please, write something into the search field');
      } else {
        return data.hits;
      }
    } catch (error) {
      console.error('Error fetching materials:', error);
      throw error;
    }
  };