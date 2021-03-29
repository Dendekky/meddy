import axios from 'axios';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { wrapper } from '../../redux/store';
import styles from '../../styles/Home.module.css';

export default function Post() {
  const { post } = useSelector((state) => state);

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

// export async function getServerSideProps({ params: { id } }) {
//   const res = await axios.get(
//     `https://jsonplaceholder.typicode.com/posts/${id}`
//   );
//   const post = res.data;
//   return {
//     props: {
//       post,
//     },
//   };
// }

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store, req }) => {
    console.log('2. Page.getServerSideProps uses the store to dispatch things');
    const { id } = req.__NEXT_INIT_QUERY
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = response.data;
    store.dispatch({
      type: 'SET_POST',
      payload: post,
    });
  }
);
