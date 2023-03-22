// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
gallery.remove();
const paragraph = document.querySelector('p');
const galleryNew = document.createElement('div');
paragraph.after(galleryNew);
galleryNew.classList.add('gallery');

createGalleryItems();

function createGalleryItems() {
    const items = [];

    for (let i = 0; i < galleryItems.length; i++) {

        const item = document.createElement('a');
        item.href = galleryItems[i].original;
        item.classList.add('gallery__item');

        const image = document.createElement('img');
        item.append(image);
        image.src = galleryItems[i].preview;
        image.alt = galleryItems[i].description;
        image.classList.add('gallery__image');

        items.push(item);
    }

    galleryNew.append(...items);
}

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});