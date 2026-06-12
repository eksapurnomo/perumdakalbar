import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/types/marketplace';

interface RecentState {
  items: Product[];
  addRecent: (product: Product) => void;
  clearRecent: () => void;
}

export const useRecentStore = create<RecentState>()(
  persist(
    (set) => ({
      items: [],
      addRecent: (product: Product) => {
        set((state) => {
          const filtered = state.items.filter((item) => item.id !== product.id);
          const newItems = [product, ...filtered];
          // Keep only last 10 viewed
          if (newItems.length > 10) newItems.pop();
          return { items: newItems };
        });
      },
      clearRecent: () => set({ items: [] }),
    }),
    {
      name: 'aneka-usaha-recent-storage',
    }
  )
);
