import CartItem from '@models/cartItem.model';
import Item from '@models/item.model';
import { create } from 'zustand';
import { produce } from 'immer';

type CartState = {
  items: Map<number, CartItem>;
  totalPrice: number;
};

type CartActions = {
  addItem: (item: Item) => void;
  removeItem: (item: Item) => void;
  deleteItem: (item: Item) => void;
};

// TODO: break down cart state
const useCart = create<CartState & CartActions>()((set) => ({
  items: new Map<number, CartItem>(),
  totalPrice: 0,
  addItem: (item: Item) => {
    set(
      produce((cartState) => {
        if (cartState.items.has(item.id)) {
          cartState.items.get(item.id)!.quantity++;
        } else {
          cartState.items.set(item.id, { ...item, quantity: 1 });
        }
        cartState.totalPrice += item.price;
      }),
    );
  },
  removeItem: (item: Item) => {
    set(
      produce((cartState) => {
        if (cartState.items.has(item.id)) {
          cartState.totalPrice -= item.price;
          cartState.totalPrice = Math.abs(cartState.totalPrice.toFixed(2));
          if (cartState.items.get(item.id)!.quantity > 1) {
            cartState.items.get(item.id)!.quantity--;
          } else {
            cartState.items.delete(item.id);
          }
        }
      }),
    );
  },
  deleteItem: (item: Item) => {
    set(
      produce((cartState) => {
        if (cartState.items.has(item.id)) {
          cartState.totalPrice -= item.price * cartState.items.get(item.id)!.quantity;
          cartState.totalPrice = Math.abs(cartState.totalPrice.toFixed(2));
          cartState.items.delete(item.id);
        }
      }),
    );
  },
}));

export default useCart;
