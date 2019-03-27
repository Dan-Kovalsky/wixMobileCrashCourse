// import {postsStore} from './posts.store';
//
// export async function fetchPosts() {
//     const response = await fetch('http://localhost:3000/posts');
//     const posts = await response.json();
//     postsStore.setPosts(posts);
// }
//
// export async function addPost(post) {
//     const response = await fetch('http://localhost:3000/posts', {
//         method: 'POST',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(post),
//     });
//     const postToAdd = await response.json();
//     postsStore.addPost(postToAdd);
// }
//
// export async function deletePost(id) {
//     await fetch(`http://localhost:3000/posts/${id}`, {
//         method: 'DELETE'
//     });
//     postsStore.deletePost(id);
// }
//
// export async function editPost(idToDelete, newPost) {
//     // postsStore.editPost(idToDelete, newPost)
//     deletePost(idToDelete);
//     addPost(newPost)
// }


import {postsStore} from './posts.store';
import * as ServerApi from '../api';

export async function fetchPosts() {
    const posts = await ServerApi.fetchPosts();
    postsStore.setPosts(posts);
}

export async function addPost(post) {
    const postToAdd = await ServerApi.addPost(post);
    postsStore.addPost(postToAdd);
}

export async function deletePost(id) {
    await ServerApi.deletePost(id);
    postsStore.deletePost(id);
}

export async function editPost(idToDelete, newPost){
    await ServerApi.editPost(idToDelete, newPost);
    // postsStore.editPost(idToDelete,newPost);
}

