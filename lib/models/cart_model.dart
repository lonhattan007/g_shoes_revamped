import 'dart:collection';

import 'package:g_shoes_revamped/models/cart_item_model.dart';

class Cart {
  final LinkedHashMap<int, CartItem> items;
  double totalPrice;

  Cart(this.items, this.totalPrice);

  void addItem(CartItem newItem) {
    if (items.containsKey(newItem.id)) {
      items[newItem.id]!.incrementQuantity();
    } else {
      items[newItem.id] = newItem;
    }

    totalPrice += items[newItem.id]!.price;
  }

  void removeItem(int id) {
    if (items.containsKey(id)) {
      double decreasedPrice = items[id]!.price;

      if (items[id]!.quantity > 1) {
        items[id]!.decreaseQuantity();
      } else if (items[id]!.quantity == 1) {
        items.remove(id);
      }

      totalPrice -= decreasedPrice;
    } else {
      print("ID does not exist.");
    }
  }
}
