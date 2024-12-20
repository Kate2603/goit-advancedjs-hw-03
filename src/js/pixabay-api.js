import axios from 'axios';

const API_KEY = '33957392-15c8dcee5be6fcb8a0c7e759b';

export const fetchImages = async query => {
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  try {
    const response = await axios.get(url);
    return response.data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};
