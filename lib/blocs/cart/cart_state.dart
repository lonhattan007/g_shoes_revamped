part of 'cart_bloc.dart';

abstract class CartState extends Equatable {
  // const CartState(this.cart);
  const CartState();
  //
  // final LinkedHashMap<int, CartItem> cart = LinkedHashMap<int, CartItem>();
  // final bool isEmpty;
  // final double totalPrice;

  @override
  List<Object> get props => [];
}

final class CartInitial extends CartState {}

final class CartLoaded extends CartState {
  final LinkedHashMap<int, CartItem> items;
  final double totalPrice;
  final bool isEmpty;

  const CartLoaded(
      {required this.items, required this.totalPrice, required this.isEmpty});

  @override
  List<Object> get props => [items, totalPrice, isEmpty];
}
