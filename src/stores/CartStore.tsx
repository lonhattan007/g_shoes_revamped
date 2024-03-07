import Cart from '@models/cart.model';
import CartItem from '@models/cartItem.model';
import { create } from 'zustand';

interface CartState {
  cart: Cart;
  addItem: (item: CartItem) => void;
  removeItem: (item: CartItem) => void;
}

const useCart = create<CartState>()((set) => {
  cart: new Cart();
  addItem: (item: CartItem) => {
    console.log(item.id);
  };
  removeItem: (item: CartItem) => {
    console.log(item.id);
  };
});

export default useCart;
