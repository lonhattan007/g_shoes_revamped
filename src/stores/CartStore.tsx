import CartItem from '@models/cartItem.model';
import Item from '@models/item.model';
import { create } from 'zustand';

interface CartState {
  items: Map<number, CartItem>;
  totalPrice: number;
  addItem: (item: Item) => void;
  removeItem: (item: Item) => void;
}

// TODO: break down cart state
const useCart = create<CartState>()((set) => ({
  items: new Map(),
  totalPrice: 0,
  addItem: (item: Item) => {
    console.log(item.id);
    set((state) => ({ totalPrice: state.totalPrice + item.price }));
  },
  removeItem: (item: Item) => {
    console.log(item.id);
    set((state) => ({ totalPrice: Math.abs(state.totalPrice - item.price) }));
  },
}));

export default useCart;
