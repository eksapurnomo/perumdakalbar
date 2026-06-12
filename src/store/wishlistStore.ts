import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product, WishlistItem } from '@/types/marketplace';

interface WishlistState {
  items: WishlistItem[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  clearWishlist: () => void;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],
      addToWishlist: (product: Product) => {
        set((state) => {
          if (state.items.some((item) => item.product.id === product.id)) {
            return state;
          }
          return { items: [...state.items, { product, addedAt: new Date() }] };
        });
      },
      removeFromWishlist: (productId: string) => {
        set((state) => ({
          items: state.items.filter((item) => item.product.id !== productId),
        }));
      },
      isInWishlist: (productId: string) => {
        return get().items.some((item) => item.product.id === productId);
      },
      clearWishlist: () => set({ items: [] }),
    }),
    {
      name: 'aneka-usaha-wishlist-storage',
      // Since Date objects aren't serializable natively by JSON, we deserialize it back
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.items = state.items.map((item: any) => ({
            ...item,
            addedAt: new Date(item.addedAt)
          }));
        }
      }
    }
  )
);
