

import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);

const gallery = document.querySelector('.gallery');

createGallery();

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: '250' });
	
function createGallery() {
    const galleryMarkup = galleryItems
        .map(item => createGaleryItem(item))
        .join('');

    gallery.insertAdjacentHTML('afterbegin', galleryMarkup);
};


function createGaleryItem({ preview, original, description }) {
    return `
    <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}"/>
    </a>
    `;
}