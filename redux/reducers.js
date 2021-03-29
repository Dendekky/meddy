import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  posts: [],
  post: {},
  errorCode: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case 'SET_POSTS':
      return { ...state, posts: action.payload };
    case 'SET_POST':
      return { ...state, post: action.payload };
    case 'SET_ERROR':
      return { ...state, errorCode: action.payload };
    default:
      return state;
  }
}
