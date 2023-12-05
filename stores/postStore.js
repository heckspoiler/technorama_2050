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
