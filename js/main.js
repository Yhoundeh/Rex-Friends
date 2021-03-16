import {loadHeaderFooter} from './utils.js';
import postList from './postList.js';
import {getModal} from './modal.js';

const post = new postList(document.querySelector('.post-list'));

loadHeaderFooter();

post.init();

const img = document.querySelectorAll('.post-card__img');
img.forEach(function(openBtn){
    openBtn.addEventListener("click", getModal);
})
const span = document.querySelectorAll(".close");
span.forEach(function(closeBtn){
    closeBtn.addEventListener('click', getModal)
})