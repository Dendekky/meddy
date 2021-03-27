import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import { fetchPosts } from '../redux/actions';
import { useSelector } from 'react-redux';
import { wrapper } from '../redux/store';
import styles from '../styles/Home.module.css';

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store, req, res, ...etc }) => {
    console.log('2. Page.getServerSideProps uses the store to dispatch things');
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const posts = response.data;
    store.dispatch({
      type: 'SET_POSTS',
      payload: posts,
    });
    // store.dispatch(fetchPosts());
    // store.dispatch({
    //   type: 'SET_POSTS',
    //   payload: [
    //     {
    //       userId: 1,
    //       id: 1,
    //       title:
    //         'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    //       body:
    //         'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    //     },
    //     {
    //       userId: 1,
    //       id: 2,
    //       title: 'qui est esse',
    //       body:
    //         'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
    //     },
    //   ],
    // });
  }
);

const Home = () => {
  const { posts } = useSelector((state) => state);
  return (
    <div className={styles.container}>
      <Head>
        <title>Meddy Test App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Meddy Test!</h1>
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
};

// export async function getServerSideProps() {
//   const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
//   const posts = await res.data;
//   return {
//     props: {
//       posts,
//     },
//   };
// }

export default Home;
