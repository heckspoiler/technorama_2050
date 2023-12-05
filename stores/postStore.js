import { create } from 'zustand';
import { fetchWordpressData } from '@/utils/api';

export const usePostsStore = create((set) => ({
  wordPressPosts: [],
  setWordPressPosts: (posts) => set({ posts }),
  fetchWordPressPosts: async () => {
    const posts = await fetchWordpressData();
    set({ posts });
  },
}));
