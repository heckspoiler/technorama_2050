'use client';
import { usePostsStore } from '../../stores/postStore';
import { styles } from './home.module.css';

export default function Home() {
  const { wordPressPosts, setWordPressPosts, fetchWordPressPosts } =
    usePostsStore();

  fetchWordPressPosts();

  if (!wordPressPosts) {
    return <h1>Fetching not working</h1>;
  }
  return (
    <>
      <h1>Posts</h1>
      {wordPressPosts.map((post) => (
        <div key={post.id}>
          <h2>{post.date}</h2>
        </div>
      ))}
    </>
  );
}
