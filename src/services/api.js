import Notiflix from 'notiflix';

export const getMaterials = async (searchQuery, page) => {
    const API_KEY = '36806904-a94ef5850b37be256607932e3'
    const baseURL = 'https://pixabay.com/api/?';
    const PER_PAGE = 24;

    try {
      const response = await fetch(`${baseURL}key=${API_KEY}&q=${searchQuery}&per_page=${PER_PAGE}&page=${page}`);
      const data = await response.json();

      if(data.hits.length === 0) {
        Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
      } else if(searchQuery === "") {
        Notiflix.Notify.warning('Please, write something into the search field');
      } else if(page === Math.ceil(data.totalHits / PER_PAGE)) {
        Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
      };

      return data;
    
    } catch (error) {
      console.error('Error fetching materials:', error);
      throw error;
    }
  };