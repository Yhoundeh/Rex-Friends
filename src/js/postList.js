import { renderListWithTemplate, fetchUrl } from './utils.js';

const URL = "https://rexfriends.herokuapp.com/getPosts"

var posts = "//valiantwolf.github.io/Rex-Friends/build/data/dinoSquad.json"

export default class postList {
    constructor (listElement) {
        this.listElement = listElement;
        this.list = '';
    }

    async init() {
        this.list = await fetchUrl(posts);
        document.getElementById("Noposts").style.display = "none";
        this.renderList();
        this.renderSidebar();
    }

    prepareTemplate(template, post) {
        template.querySelector('.post-card .modal').id += post.post_id;
        template.querySelector('.post-card__group').textContent =  post.group_name;
        template.querySelector('.post-card__user').textContent =  post.user_name;
        template.querySelector('.post-card__img').src +=  post.img_path;
        template.querySelector('.post-card__img').alt += post.group_name;
        template.querySelector('.modal-content').src +=  post.img_path;
        template.querySelector('.modal-content').alt += post.group_name;
        template.querySelector('.post-card__info').textContent =  post.post_content;
        if(post.favorited) {
            post.favorited = '<i class="fas fa-heart fa-2x"></i>';
        } else {
            post.favorited = '<i class="far fa-heart fa-2x"></i>';
        }
        template.querySelector('.post-card__favorite').innerHTML = post.favorited;
        const commentTemplate = template.querySelector('.post-card__comments');
        this.renderComment(commentTemplate, post.comments)
        return template;
    }

    prepareComment(template, comment){
        template.querySelector('.post-card__comment-user').textContent = comment.user_name;
        template.querySelector('.post-card__comment-info').textContent = comment.comment_content;
        return template;
    }

    renderComment(commentTemplate, comments) {
        const template = document.getElementById('comment-card__template');
        renderListWithTemplate(template, commentTemplate, comments, this.prepareComment)
    }

    prepareSidebar(template, group){
        template.querySelector('.sidebar__group').textContent = group.group_name;
        return template;
    }

    renderList() {
        this.listElement.innerHTML = '';
        const template = document.getElementById('post-card__template');
        renderListWithTemplate(template, this.listElement, this.list['post'], this.prepareTemplate.bind(this))   
    }

    renderSidebar() {
        const listElement = document.querySelector('.sidebar-info');
        const template = document.getElementById('sidebar__template');
        renderListWithTemplate(template, listElement, this.list['post'], this.prepareSidebar)   
    }
}