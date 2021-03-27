import React from 'react';
// import withRedux from 'next-redux-wrapper';
// import { Provider } from 'react-redux';
import { wrapper } from '../redux/store';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    // <Provider store={store}>
      <Component {...pageProps} />
    // </Provider>
  );
}

export default wrapper.withRedux(MyApp);

// const MyApp = props => {
//   const { Component, pageProps, store } = props;
//   return (
//     <Provider store={store}>
//       <Component {...pageProps} />
//     </Provider>
//   );
// };

// MyApp.getInitialProps = async ({ Component, ctx }) => {
//   const pageProps = Component.getInitialProps
//     ? await Component.getInitialProps(ctx)
//     : {};
//   return { pageProps };
// };

// export default withRedux(initStore)(MyApp);
