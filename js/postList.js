import { renderListWithTemplate } from './utils.js';

var posts = [
    {
        "id": 0,
        "group": {"groupId": 0, "groupName": "DinoSquad"},
        "user": {"userId": 0, "userName": "Bobbert"},
        "img": "dinosaur-img.jpg",
        "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi atque accusamus explicabo nemo assumenda, nobis architecto, aperiam beatae odio sit et vitae. Laborum commodi repellat impedit maiores, architecto pariatur sequi!",
        "favorited": true,
        "comments":[
            {
                "user": {"userId": 1, "userName": "Caren"},
                "comment": "Why do you like DINOS!?!"
            },
            {
                "user": {"userId": 2, "userName": "Fred"},
                "comment": "BEcause they are amamamzing!!!!"
            }
        ]
    },
    {
        "id": 1,
        "group": {"groupId": 0, "groupName": "AntiDinoSquad"},
        "user": {"userId": 1, "userName": "Caren"},
        "img": "yeet-the-dinos.jpg",
        "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi atque accusamus explicabo nemo assumenda, nobis architecto, aperiam beatae odio sit et vitae. Laborum commodi repellat impedit maiores, architecto pariatur sequi!",
        "favorited": false,
        "comments":[
            {
                "user": {"userId": 0, "userName": "Bobbert"},
                "comment": "You are Lame"
            },
            {
                "user": {"userId": 2, "userName": "Fred"},
                "comment": "Yeah you tell her Bobbert"
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
        document.getElementById("Noposts").style.display = "none";
        this.renderList();
    }

    prepareTemplate(template, post) {
        template.querySelector('.post-card .modal').id += post.id;
        template.querySelector('.post-card__group').textContent =  post.group.groupName;
        template.querySelector('.post-card__user').textContent =  post.user.userName;
        template.querySelector('.post-card__img').src +=  post.img;
        template.querySelector('.post-card__img').alt += post.group.groupName;
        template.querySelector('.modal-content').src +=  post.img;
        template.querySelector('.modal-content').alt += post.group.groupName;
        template.querySelector('.post-card__info').textContent =  post.info;
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
        template.querySelector('.post-card__comment-user').textContent = comment.user.userName;
        template.querySelector('.post-card__comment-info').textContent = comment.comment;
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