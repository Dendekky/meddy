import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Meddy Test App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Meddy Test!
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/post/${post.id}`}
              as={`/post/${post.id}`}
            >
              <a className={styles.card}>
                <h3>{post.title} &rarr;</h3>
                <p>{post.body}</p>
              </a>
            </Link>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.data;
  return {
    props: {
      posts,
    },
  };
}
