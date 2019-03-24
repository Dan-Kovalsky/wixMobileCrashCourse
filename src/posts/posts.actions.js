import {postsStore} from './posts.store';

// const posts = [
//     {
//         id: 1,
//         title: 'Post 1',
//         text: 'Post 1 text',
//         img: 'https://picsum.photos/200/200/?image=977'
//     },
//     {
//         id: 2,
//         title: 'Post 2',
//         text: 'Post 2 text',
//         img: 'https://picsum.photos/200/200/?image=1'
//     }
// ];

export async function fetchPosts() {
    const response = await fetch('http://localhost:3000/posts');
    const posts = await response.json();
    postsStore.setPosts(posts);
}

export async function addPost(post) {
    const response = await fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
    });
    const postToAdd = await response.json();
    postsStore.addPost(postToAdd);
}

export async function deletePost(id) {
    await fetch(`http://localhost:3000/posts/${id}`, {
        method: 'DELETE'
    });
    postsStore.deletePost(id);
}

export async function editPost(idToDelete, newPost) {
    deletePost(idToDelete);
    addPost(newPost)
}

