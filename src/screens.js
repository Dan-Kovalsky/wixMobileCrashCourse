// import { Navigation } from 'react-native-navigation';
// import AddPost from './src/posts/screens/AddPost';
// import PostsList from './src/posts/screens/PostList';
// import ViewPost from './src/posts/screens/ViewPost';
//
// export function registerScreens() {
//     Navigation.registerComponent(`PostsListScreen`, () => PostsList);
//     Navigation.registerComponent(`AddPostScreen`, () => AddPost);
//     Navigation.registerComponent(`ViewPostScreen`, () => ViewPost);
// }

import {Navigation} from 'react-native-navigation';

export function registerScreens() {
    Navigation.registerComponent('blog.PostsList', () => require('./posts/screens/PostsList').default);
    Navigation.registerComponent('blog.AddPost', () => require('./posts/screens/AddPost').default);
    Navigation.registerComponent('blog.ViewPost', () => require('./posts/screens/ViewPost').default);
    Navigation.registerComponent('blog.EditPost', () => require('./posts/screens/EditPost').default);
}
