import * as remx from 'remx';

const initialState = {
    posts: []
};
const state = remx.state(initialState);



/**
 {
  "posts": [
    {
      "id": 1,
      "title": "Post 1",
      "author": "Post 1 text",
      "img": "https://picsum.photos/200/200/?image=1"
    },
    {
      "id": 2,
      "title": "Post 2",
      "author": "Post 2 text",
      "img": "https://picsum.photos/200/200/?image=2"
    }
  ]
}
 */
