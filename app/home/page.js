'use client';

import { useEffect } from 'react';
import { usePostsStore } from '../../stores/postStore';
import styles from './home.module.css';

export default function Home() {
  const { wordPressPosts, setWordPressPosts, fetchWordPressPosts } =
    usePostsStore();

  useEffect(() => {
    fetchWordPressPosts();
  }, [fetchWordPressPosts]);

  if (!wordPressPosts || wordPressPosts.length === 0) {
    return <h1>Loading posts...</h1>;
  }

  return (
    <>
      <h1 className={styles.mainTitle}>Posts</h1>
      {wordPressPosts.map((post) => (
        <div key={post.id}>
          <h2>{post.title.rendered}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
      ))}
    </>
  );
}
