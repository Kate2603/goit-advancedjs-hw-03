import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import './css/styles.css';

const form = document.querySelector('.search-form');
const gallery = new SimpleLightbox('.gallery a');

form.addEventListener('submit', async event => {
  event.preventDefault();
  const query = event.target.elements.query.value.trim();

  if (!query) {
    return iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search term.',
    });
  }

  showLoader(); // Show loading indicator

  try {
    const images = await fetchImages(query);
    renderImages(images);
    gallery.refresh(); // Update gallery
  } catch (error) {
    console.error('Error:', error);
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images. Please try again later.',
    });
  } finally {
    hideLoader(); // Hide loading indicator
  }
});

const showLoader = () => {
  const loader = document.getElementById('loader');
  loader.style.display = 'flex'; // Show indicator
};

const hideLoader = () => {
  const loader = document.getElementById('loader');
  loader.style.display = 'none '; // Hide indicator
};
