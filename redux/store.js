import { createStore, applyMiddleware } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';

export const makeStore = (context) =>
  createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );

export const wrapper = createWrapper(makeStore, { debug: true });
