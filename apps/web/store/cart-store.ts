import { Cart } from "@/types/cart";
import { create } from "zustand";

type CartStore = {
  cart: Cart | null;
  setCart: (cart: Cart) => void;
  increase: (id: string) => void;
  decrease: (id: string) => void;
  remove: (id: string) => void;
  clear: () => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cart: null,
  setCart: (cart) => set({ cart }),
  increase: (id) =>
    set((state) => {
      if (!state.cart) return state;

      return {
        cart: {
          ...state.cart,
          items: state.cart.items.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
          ),
        },
      };
    }),
  decrease: (id) =>
    set((state) => {
      if (!state.cart) return state;

      return {
        cart: {
          ...state.cart,
          items: state.cart.items.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
          ),
        },
      };
    }),
  remove: (id) =>
    set((state) => {
      if (!state.cart) return state;

      return {
        cart: {
          ...state.cart,
          items: state.cart.items.filter((i) => i.id !== id),
        },
      };
    }),

  clear: () => set({ cart: null }),
}));
