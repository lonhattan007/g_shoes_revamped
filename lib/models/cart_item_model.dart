import 'package:equatable/equatable.dart';
import 'package:g_shoes_revamped/models/shoe_model.dart';

class CartItem extends Equatable {
  final int id;
  final String name;
  final String imageUrl;
  final double price;
  final String color;
  final int quantity;

  const CartItem(
    this.id,
    this.name,
    this.imageUrl,
    this.price,
    this.color,
    this.quantity,
  );

  CartItem.fromShoe(Shoe shoe)
      : id = shoe.id,
        name = shoe.name,
        imageUrl = shoe.imageUrl,
        price = shoe.price,
        color = shoe.color,
        quantity = 1;

  @override
  List<Object?> get props => [id, name, imageUrl, price, quantity];

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

  CartItem copyWith({
    int? id,
    String? name,
    String? imageUrl,
    double? price,
    String? color,
    int? quantity,
  }) {
    int newId = id ?? this.id;
    String newName = name ?? this.name;
    String newImageUrl = imageUrl ?? this.imageUrl;
    double newPrice = price ?? this.price;
    String newColor = color ?? this.color;
    int newQuantity = quantity ?? this.quantity;

    return CartItem(
        newId, newName, newImageUrl, newPrice, newColor, newQuantity);
  }
}
