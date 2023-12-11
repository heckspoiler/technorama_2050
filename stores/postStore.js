import { create } from 'zustand';
import { fetchWordpressData } from '@/utils/api';

export const usePostsStore = create((set) => ({
  wordPressPosts: [],
  setWordPressPosts: (posts) => set({ wordPressPosts: posts }),
  fetchWordPressPosts: async () => {
    const posts = await fetchWordpressData();
    console.log('Posts from Store:', posts);
    set({ wordPressPosts: posts });
  },
}));

// Function for component to fetch data from zustand store

// const { wordPressPosts, setWordPressPosts, fetchWordPressPosts } =
// usePostsStore();

// useEffect(() => {
// fetchWordPressPosts();
// }, [fetchWordPressPosts]);

// console.log('Posts from Home: ', wordPressPosts);

// if (!wordPressPosts || wordPressPosts.length === 0) {
// return <h1>Loading posts...</h1>;
// }
