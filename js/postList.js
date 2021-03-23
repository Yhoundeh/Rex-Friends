import { renderListWithTemplate } from './utils.js';
var posts = [
    {
        "post_id": 0,
        "group_id": 0, 
        "group_name": "DinoSquad",
        "user_id": 0, 
        "user_name": "Bobbert",
        "img_path": "dinosaur-img.jpg",
        "post_content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi atque accusamus explicabo nemo assumenda, nobis architecto, aperiam beatae odio sit et vitae. Laborum commodi repellat impedit maiores, architecto pariatur sequi!",
        "favorited": true,
        "posted_date": "2020-12-12T00:00:00.000Z",
        "comments":[
            {
                "user_id": 1,
                "user_name": "Caren",
                "comment_content": "Why do you like DINOS!?!",
                "posted_date": "2020-12-12T00:00:00.000Z"
            },
            {
                "user_id": 2, 
                "user_name": "Fred",
                "comment_content": "BEcause they are amamamzing!!!!",
                "posted_date": "2020-12-12T00:00:00.000Z"
            }
        ]
    },
    {
        "post_id": 1,
        "group_id": 1, 
        "group_name": "AntiDinoSquad",
        "user_id": 1, 
        "user_name": "Caren",
        "img_path": "yeet-the-dinos.jpg",
        "post_content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi atque accusamus explicabo nemo assumenda, nobis architecto, aperiam beatae odio sit et vitae. Laborum commodi repellat impedit maiores, architecto pariatur sequi!",
        "favorited": false,
        "posted_date": "2020-12-12T00:00:00.000Z",
        "comments":[
            {
                "user_id": 0,
                "user_name": "Bobbert",
                "comment_content": "You are Lame",
                "posted_date": "2020-12-12T00:00:00.000Z"
            },
            {
                "user_id": 2, 
                "user_name": "Fred",
                "comment_content": "Yeah you tell her Bobbert",
                "posted_date": "2020-12-12T00:00:00.000Z"
            }
        ]
    }
]

export default class postList {
    constructor (listElement) {
        this.listElement = listElement;
        this.list = posts
    }

    async init() {
        this.renderList();
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

    renderList() {
        this.listElement.innerHTML = '';
        const template = document.getElementById('post-card__template');
        renderListWithTemplate(template, this.listElement, this.list, this.prepareTemplate.bind(this))   
    }
}