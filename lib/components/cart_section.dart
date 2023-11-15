import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:g_shoes_revamped/blocs/cart/cart_bloc.dart';
import 'package:g_shoes_revamped/components/cart_item_card.dart';
import 'package:g_shoes_revamped/components/section_card.dart';

class CartSection extends StatelessWidget {
  const CartSection({super.key});

  final double width = 360;
  final double height = 600;

  @override
  Widget build(BuildContext context) {
    return SectionCard(
      width: width,
      height: height,
      header: Container(
        margin: const EdgeInsets.symmetric(vertical: 16),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Text(
              'Your cart',
              style: Theme.of(context).textTheme.titleLarge,
            ),
            BlocBuilder<CartBloc, CartState>(builder: (context, state) {
              if (state is CartLoaded) {
                return Text(
                  '\$${state.totalPrice.toStringAsFixed(2)}',
                  style: Theme.of(context).textTheme.titleLarge,
                );
              } else {
                return Text(
                  '\$0.00',
                  style: Theme.of(context).textTheme.titleLarge,
                );
              }
            }),
          ],
        ),
      ),
      content: Expanded(
        child: ScrollConfiguration(
          behavior: ScrollConfiguration.of(context).copyWith(scrollbars: false),
          child: BlocBuilder<CartBloc, CartState>(
            builder: (context, state) {
              if (state is CartLoaded && state.items.isNotEmpty) {
                return ListView(
                  children: state.items.values
                      .map((item) => CartItemCard(cartItem: item))
                      .toList(),
                );
              } else {
                return Container(
                  margin: const EdgeInsets.symmetric(vertical: 14),
                  child: Text(
                    'Your cart is empty',
                    style: Theme.of(context).textTheme.bodyMedium,
                  ),
                );
              }
            },
          ),
        ),
      ),
    );
  }
}
