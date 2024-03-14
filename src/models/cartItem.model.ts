import Item from './item.model';

interface CartItem extends Item {
  quantity: number;
}

export default CartItem;
