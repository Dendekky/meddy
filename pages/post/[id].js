import axios from 'axios';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';

export default function Post({ post }) {
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

export async function getServerSideProps({ params: { id } }) {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post = res.data;
  return {
    props: {
      post,
    },
  };
}
