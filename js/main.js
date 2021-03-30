import {loadHeaderFooter, loadSidebar, clickLike} from './utils.js';
import postList from './postList.js';
import {getModal} from './modal.js';

const post = new postList(document.querySelector('.post-list'));

loadHeaderFooter();
loadSidebar();

post.init()
    .then(() => {
        const img = document.querySelectorAll('.post-card__img');
        img.forEach(function(openBtn){
            openBtn.addEventListener("click", getModal);
        })
        
        const span = document.querySelectorAll(".close");
        span.forEach(function(closeBtn){
            closeBtn.addEventListener('click', getModal)
        })
        
        const icon = document.querySelectorAll(".fas, .far");
        icon.forEach(function(likeBtn){
            likeBtn.addEventListener('click', clickLike)
        })
    }
)

