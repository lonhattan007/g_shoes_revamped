part of 'cart_bloc.dart';

sealed class CartEvent extends Equatable {
  const CartEvent();

  @override
  List<Object> get props => [];
}

final class LoadCart extends CartEvent {}

final class AddItemToCart extends CartEvent {
  final CartItem itemToAdd;

  const AddItemToCart({required this.itemToAdd});

  @override
  List<Object> get props => [];
}

final class DecreaseItemQuantity extends CartEvent {
  final int idToUpdate;

  const DecreaseItemQuantity({required this.idToUpdate});

  @override
  List<Object> get props => [];
}

final class RemoveItemFromCart extends CartEvent {
  final int idToRemove;

  const RemoveItemFromCart({required this.idToRemove});

  @override
  List<Object> get props => [];
}