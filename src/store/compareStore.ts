import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/types/marketplace';

interface CompareState {
  items: Product[];
  addToCompare: (product: Product) => void;
  removeFromCompare: (productId: string) => void;
  isInCompare: (productId: string) => boolean;
  clearCompare: () => void;
}

export const useCompareStore = create<CompareState>()(
  persist(
    (set, get) => ({
      items: [],
      addToCompare: (product: Product) => {
        set((state) => {
          if (state.items.some((item) => item.id === product.id)) {
            return state;
          }
          // Max 4 items to compare
          const newItems = [...state.items, product];
          if (newItems.length > 4) newItems.shift(); 
          return { items: newItems };
        });
      },
      removeFromCompare: (productId: string) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== productId),
        }));
      },
      isInCompare: (productId: string) => {
        return get().items.some((item) => item.id === productId);
      },
      clearCompare: () => set({ items: [] }),
    }),
    {
      name: 'aneka-usaha-compare-storage',
    }
  )
);
