import 'package:equatable/equatable.dart';
import 'package:g_shoes_revamped/models/shoe_model.dart';

class CartItem extends Equatable {
  final int id;
  final String name;
  final String imageUrl;
  final double price;
  final String color;
  int quantity;

  CartItem(this.id, this.name, this.imageUrl, this.price, this.color, this.quantity);

  CartItem.fromShoe(Shoe shoe)
      : id = shoe.id,
        name = shoe.name,
        imageUrl = shoe.imageUrl,
        price = shoe.price,
        color = shoe.color,
        quantity = 1;

  @override
  List<Object?> get props => [id, name, imageUrl, price, quantity];

  void incrementQuantity() {
    quantity += 1;
  }

  void decreaseQuantity() {
    if (quantity > 0) {
      quantity -= 1;
    }
  }

  @override
  String toString() {
    return """
      Cart item ID: $id
      name: $name
      quantity: $quantity
      price: $price
      ---------------------------
    """;
  }
}
