import axios from 'axios';
import Head from 'next/head';
import Error from 'next/error';
import { useSelector } from 'react-redux';
import { wrapper } from '../../redux/store';
import styles from '../../styles/Home.module.css';

export default function Post() {
  const { post, errorCode } = useSelector((state) => state);

  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Meddy Test App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.description}>{post.body}</p>
      </main>
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store, req }) => {
    const { id } = req.__NEXT_INIT_QUERY;
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const post = response.data;
    if (post) {
      store.dispatch({
        type: 'SET_POST',
        payload: post,
      });
    } else {
      store.dispatch({
        type: 'SET_ERROR',
        payload: 500,
      });
    }
  }
);
