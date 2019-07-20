import galleryItems from './gallery-items.js';

// Генерирую разметку

const gallery = document.querySelector('.gallery');

const createItems = (galleryItems) => {
    const items = galleryItems.map(item => `
        <li class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img class="gallery__image" src="${item.preview}" data-source="${item.original}"alt="Tulips"/>      
                <span class="gallery__icon">
                    <i class="material-icons">zoom_out_map</i>
                </span>
            </a>
        </li>`
    ).join(' ');

    return items;
};

const readyItems = createItems(galleryItems);

gallery.insertAdjacentHTML("afterbegin", readyItems);


// Вешаю слушатель

const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.content__button');

gallery.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
overlay.addEventListener('click', handleOverlayClick);

function openModal(e) {
    e.preventDefault();
    if(e.target.nodeName !== 'IMG') {
        return;
    };

    const source = e.target.dataset.source;
    const backdropImg = overlay.querySelector('img');
    
    backdropImg.src = source;
    overlay.classList.add('is-visible');

    window.addEventListener('keydown', handleWindowKeydown);
};

function closeModal(){
    overlay.classList.remove('is-visible');
    window.removeEventListener('keydown', handleWindowKeydown);
};

function handleOverlayClick(e) {
    if(e.target === e.currentTarget) {
        closeModal(); 
    };
};

function handleWindowKeydown (e) {
    if(e.code === 'Escape'){
        closeModal();
    };
};










