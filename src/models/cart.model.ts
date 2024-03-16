import CartItem from './cartItem.model';

class Cart {
  items: Map<number, CartItem>;
  totalPrice: number;

  constructor() {
    this.items = new Map();
    this.totalPrice = 0;
  }
}

export default Cart;
