import { render, screen } from '@testing-library/react';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from '../pages/index';

describe('App', () => {
  const initialState = { posts: [] };
  const mockStore = configureStore();
  let store;

  it('renders without crashing', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.getByRole('heading', { name: 'Welcome to Meddy Test!' })).toBeInTheDocument();
  });
});
