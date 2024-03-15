import CartItem from '@models/cartItem.model';
import Item from '@models/item.model';
import { create } from 'zustand';
import { produce } from 'immer';
import { loadMapFromLocalStorage } from '@utils/mapToLocalStorage';
import { LS_CART_ITEMS } from '@constants/localStorageKeys';

type CartState = {
  items: Map<number, CartItem>;
  totalPrice: number;
};

type CartActions = {
  addItem: (item: Item) => void;
  removeItem: (item: Item) => void;
  deleteItem: (item: Item) => void;
};

const initialCartItems = loadMapFromLocalStorage(LS_CART_ITEMS) || new Map<number, CartItem>();

const initialState: CartState = {
  items: initialCartItems,
  totalPrice: Array.from(initialCartItems.values()).reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  ),
};

const useCart = create<CartState & CartActions>()((set) => ({
  ...initialState,
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
