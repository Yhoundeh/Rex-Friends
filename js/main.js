import {loadHeaderFooter} from './utils.js';
import postList from './postList.js';

const post = new postList(document.querySelector('.post-list'));
// import {loadHeaderFooter, loadPosts} from './template.js';

loadHeaderFooter();

post.init();
// loadPosts();