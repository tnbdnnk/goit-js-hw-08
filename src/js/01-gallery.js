import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';

const galleryContainer = document.querySelector('.gallery');

const makeGalleryGrid = ({ preview, original, description }) => 
    `<li class="gallery__item"> 
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </li>`;

const markupGallery = galleryItems.map(e => makeGalleryGrid(e)).join('');
galleryContainer.insertAdjacentHTML('afterbegin', markupGallery);


new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
});
