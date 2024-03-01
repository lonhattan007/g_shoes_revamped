import 'dart:collection';

import 'package:g_shoes_revamped/models/cart_item_model.dart';

class Cart {
  final LinkedHashMap<int, CartItem> items;
  double totalPrice;

  Cart(this.items, this.totalPrice);
}
