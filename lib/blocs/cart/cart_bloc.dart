import 'dart:collection';

import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:g_shoes_revamped/models/cart_item_model.dart';
import 'package:equatable/equatable.dart';

part 'cart_event.dart';

part 'cart_state.dart';

class CartBloc extends Bloc<CartEvent, CartState> {
  CartBloc() : super(CartInitial()) {
    on<LoadCart>((event, emit) {
      emit(
        CartLoaded(
          items: LinkedHashMap<int, CartItem>.of({}),
          totalPrice: 0,
          isEmpty: true,
        ),
      );
    });

    on<AddItemToCart>((event, emit) {
      if (state is CartLoaded) {
        final state = this.state as CartLoaded;
        final int idToAdd = event.itemToAdd.id;

        if (state.items.containsKey(idToAdd)) {
          // If the item exists, just increase the quantity
          int currentQuantity = state.items[idToAdd]!.quantity;

          state.items[idToAdd] =
              state.items[idToAdd]!.copyWith(quantity: currentQuantity + 1);
          emit(
            CartLoaded(
              items: state.items,
              totalPrice: state.totalPrice + event.itemToAdd.price,
              isEmpty: false,
            ),
          );
        } else {
          // If it doesn't add it to the cart
          emit(
            CartLoaded(
              items: state.items..addAll({idToAdd: event.itemToAdd}),
              totalPrice: state.totalPrice + event.itemToAdd.price,
              isEmpty: false,
            ),
          );
        }
      }
    });

    on<DecreaseItemQuantity>((event, emit) {
      if (state is CartLoaded) {
        final state = this.state as CartLoaded;
        final int idToUpdate = event.idToUpdate;

        if (state.items.containsKey(idToUpdate)) {
          double priceToDecrease = state.items[idToUpdate]!.price;
          int currentQuantity = state.items[idToUpdate]!.quantity;

          if (currentQuantity == 1) {
            // Remove the item
            state.items.remove(idToUpdate);
          } else {
            // Only change the quantity
            state.items[idToUpdate] = state.items[idToUpdate]!
                .copyWith(quantity: currentQuantity - 1);
          }

          emit(CartLoaded(
            items: state.items,
            totalPrice: state.totalPrice - priceToDecrease,
            isEmpty: state.items.isEmpty,
          ));
        } else {
          print('ID does not exists!');
        }
      }
    });

    on<RemoveItemFromCart>((event, emit) {
      if (state is CartLoaded) {
        final state = this.state as CartLoaded;
        final int idToRemove = event.idToRemove;

        if (state.items.containsKey(idToRemove)) {
          double priceToDecrease = state.items[idToRemove]!.quantity *
              state.items[idToRemove]!.price;

          state.items.remove(idToRemove);

          emit(CartLoaded(
              items: state.items,
              totalPrice: state.totalPrice - priceToDecrease,
              isEmpty: state.items.isEmpty));
        } else {
          print('ID does not exist!');
        }
      }
    });
  }
}
