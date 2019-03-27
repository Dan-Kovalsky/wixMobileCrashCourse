const baseUrl = 'http://localhost:3000/posts';

export async function fetchPosts() {
    const response = await fetch(baseUrl);
    const posts = await response.json();
    return posts;
}

export async function addPost(post) {
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
    });
    const postToAdd = await response.json();
    return postToAdd;
}

export async function deletePost(id) {
    await fetch(`${baseUrl}/${id}`, {
        method: 'DELETE'
    });
}

export async function editPost(idToDelete, newPost) {
    // postsStore.editPost(idToDelete, newPost)
    await deletePost(idToDelete);
    await addPost(newPost)
}
