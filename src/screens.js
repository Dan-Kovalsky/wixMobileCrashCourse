import AddPost from './src/posts/screens/AddPost';
import PostsList from './src/posts/screens/PostList';


Navigation.registerComponent(`PostsListScreen`, () => PostsList);
Navigation.registerComponent(`AddPostScreen`, () => AddPost);
