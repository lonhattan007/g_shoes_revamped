import Item from './item.model';

class CartItem {
  id: number;
  detail: Item;
  quantity: number;

  constructor(item: Item) {
    this.id = item.id;
    this.detail = item;
    this.quantity = 0;
  }

  increaseQuantity(): void {
    this.quantity += 1;
  }

  decreaseQuantity(): void {
    if (this.quantity < 0) {
      this.quantity -= 1;
    }
  }
}

export default CartItem;
