// import * as remx from 'remx';
// import filter from 'lodash/filter';
//
//
// const initialState = {
//     posts: []
// };
//
// const state = remx.state(initialState);
//
// const getters = remx.getters({
//     getPosts() {
//         return state.posts;
//     }
// });
//
// const setters = remx.setters({
//     setPosts(posts) {
//         state.posts = posts;
//     }
//     ,
//     addPost(post) {
//         state.posts = [...state.posts, post];
//     },
//
//     deletePost(id) {
//         state.posts = filter(state.posts, post => post.id !== id);
//     },
//
//     editPost(id, post){
//         state.posts = state.posts.map((oldPost) => {
//             if (id === oldPost.id) {
//                 oldPost.title = post.title;
//                 oldPost.text = post.text;
//             }
//         })
//     }
// });
//
// export const postsStore = {
//     ...getters,
//     ...setters
// };


describe('posts store', () => {
    let postsStore =  require('./posts.store').postsStore;

    const mockPosts = [
        {
            id: 1,
            title: 'Post 1',
            text: 'Post 1 text',
            img: 'https://picsum.photos/200/200/?image=977'
        },
        {
            id: 2,
            title: 'Post 2',
            text: 'Post 2 text',
            img: 'https://picsum.photos/200/200/?image=1'
        }
    ];
    const mockPost = {
        id: 3,
        title: 'Post 3',
        text: 'Post 3 text',
        img: 'https://picsum.photos/200/200/?image=977'
    };

    // beforeEach(() => {
    //     postsStore = require('./posts.store').postsStore;
    // });

    it('should have an initial state without any posts', () => {
        expect(postsStore.getPosts()).toEqual([]);
    });

    it('should set posts', () => {
        postsStore.setPosts(mockPosts);
        expect(postsStore.getPosts()).toEqual(mockPosts);

    });
    it('should add a post', () => {
        postsStore.setPosts(mockPosts);
        postsStore.addPost(mockPost);
        expect(postsStore.getPosts()).toEqual([...mockPosts, mockPost]);

    });
    it('should delete a post', () => {
        postsStore.setPosts(mockPosts);
        postsStore.deletePost(mockPosts[0].id);
        postsStore.deletePost(2);
        expect(postsStore.getPosts()).toEqual([]);
    });
});
