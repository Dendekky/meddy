import React, { useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const AddNewPost = () => {
  const [item, setItem] = useState({
    title: '',
    body: '',
    userId: '',
  });

  const onChange = (e) => {
    e.persist();
    setItem({ ...item, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://jsonplaceholder.typicode.com/posts', item)
      .then(() => alert('new post created'))
      .catch(() => alert('unable to create post'));
    setItem({
      title: '',
      body: '',
      userId: '',
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Meddy Test App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <form onSubmit={onSubmit} className={styles.form}>
          <label htmlFor='userId'>User Id</label>
          <input
            id='userId'
            name='userId'
            type='number'
            value={item.userId}
            onChange={onChange}
            className={styles.input}
            placeholder='User Id'
          />
          <label htmlFor='title'>Text Title</label>
          <input
            id='title'
            name='title'
            type='text'
            value={item.title}
            onChange={onChange}
            className={styles.input}
            placeholder='Text Title'
          />
          <label htmlFor='body'>Text Body</label>
          <textarea
            id='body'
            name='body'
            type='text'
            value={item.body}
            onChange={onChange}
            className={styles.input}
            placeholder='Text Body'
          />
          <button className={styles.formButton}>Submit</button>
        </form>
      </main>
    </div>
  );
};

export default AddNewPost;
