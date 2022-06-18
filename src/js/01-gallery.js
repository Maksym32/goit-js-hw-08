import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const image = createGalleryItem(galleryItems);
gallery.addEventListener('click', onImageClick);
gallery.insertAdjacentHTML('afterbegin', image);

function createGalleryItem(galleryItems) {
  return galleryItems.map(({ preview, original, description }) =>
    `<a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`).join("");

};

function onImageClick(event) {
  
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return
  }
  const lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt',
  captionDelay: 250
});
};