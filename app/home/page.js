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
          <div>{post.id}</div>
          <div>{post.categories}</div>
        </div>
      ))}

      <svg
        width="100%"
        height="100%"
        viewBox="0 0 703 184"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path id={styles.svgShape} fill="blue" stroke="black" />
        <text
          x="50%"
          y="50%"
          text-anchor="middle"
          fill="white"
          font-family="Verdana"
          font-size="24"
          dy=".3em"
        >
          Hover Me
        </text>
      </svg>
    </>
  );
}
