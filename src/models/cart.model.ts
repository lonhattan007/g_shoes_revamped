import CartItem from './cartItem.model';

class Cart {
  items: Map<number, CartItem>;
  totalPrice: number;

  constructor() {
    this.items = new Map();
    this.totalPrice = 0;
  }

  addItem(item: CartItem): void {
    const id = item.id;

    if (this.items.has(id)) {
      this.items.get(id)?.increaseQuantity();
    } else {
      this.items.set(id, item);
    }

    this.totalPrice += item.detail.price;
  }

  removeItem(item: CartItem): void {
    const id = item.id;

    if (this.items.has(id)) {
      this.items.get(id)?.decreaseQuantity();

      if (this.items.get(id)?.quantity == 0) {
        this.items.delete(id);
      }

      this.totalPrice -= item.detail.price;
    } else {
      console.error(`Item ${id} doesn't exist!`);
    }
  }
}

export default Cart;
