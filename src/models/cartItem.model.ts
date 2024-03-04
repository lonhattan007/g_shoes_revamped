class CartItem {
  id: number;
  quantity: number;

  constructor(id: number) {
    this.id = id;
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
