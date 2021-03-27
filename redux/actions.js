import axios from 'axios';

export function fetchPosts() {
  return (dispatch) =>
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(({ data }) => dispatch({ type: 'SET_POSTS', payload: data }));
}
