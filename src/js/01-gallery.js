import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

let galleryEl = document.querySelector('.gallery');

for (const item of galleryItems) {
  galleryEl.insertAdjacentHTML(
    'beforeend',
    `<li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
   </a>
</li>`
  );
}

galleryEl.addEventListener('click', event => event.preventDefault());

var lightbox = new SimpleLightbox('.gallery li a', {
  captionDelay: 250,
  captionsData: 'alt',
});
