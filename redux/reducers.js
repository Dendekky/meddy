import {HYDRATE} from 'next-redux-wrapper';

const initialState = {
  posts: [],
  post: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case 'SET_POSTS':
    //   console.log(action.payload);
      return { ...state, posts: action.payload };
    case 'SET_POST':
      console.log(action.payload);
      return { ...state, post: action.payload };
    default:
      return state;
  }
}
