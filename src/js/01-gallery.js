// Add imports above this line
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

let galleryEl = document.querySelector('.gallery');

for (const item of galleryItems) {
  galleryEl.insertAdjacentHTML(
    'beforeend',
    `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </div>`
  );
}

galleryEl.addEventListener('click', event => event.preventDefault());

document.querySelector('.gallery').onclick = () => {
  basicLightbox
    .create(
      `
		<img width="1400" height="900" src="${event.target.dataset.source}">
	`
    )
    .show();
};
