import iziToast from 'izitoast';

export const renderImages = images => {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = ''; // Clearing the gallery before a new request
  if (images.length === 0) {
    showMessage(
      'Sorry, there are no images matching your search query. Please try again!'
    );
    return;
  }

  const markup = images
    .map(
      ({ webformatURL, largeImageURL, tags }) => `
        <a href="${largeImageURL}" class="gallery__item">
            <img src="${webformatURL}" alt="${tags}" class="gallery__image" />
        </a>
    `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
};

const showMessage = message => {
  iziToast.error({
    title: 'Error',
    message: message,
  });
};
