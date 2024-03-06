import CartItem from './cartItem.model';

class Cart {
  items: Map<number, CartItem>;
  totalPrice: number;

  constructor() {
    this.items = new Map();
    this.totalPrice = 0;
  }

  addItem(item: CartItem): void {
    console.log(item.id);
  }

  removeItem(item: CartItem): void {
    console.log(item.id);
  }
}

export default Cart;
