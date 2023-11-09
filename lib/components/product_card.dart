import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:g_shoes_revamped/bloc/cart_bloc.dart';
import 'package:g_shoes_revamped/models/cart_item_model.dart';

import 'dart:math' as math;

import 'package:g_shoes_revamped/models/shoe_model.dart';
import 'package:g_shoes_revamped/themes/custom_colorscheme.dart';
import 'package:g_shoes_revamped/utils/hex_color.dart';

class ProductCard extends StatelessWidget {
  const ProductCard({super.key, required this.shoe});

  final Shoe shoe;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: <Widget>[
        Container(
          // width: 304,
          height: 380,
          decoration: BoxDecoration(
            color: HexColor.fromHex(shoe.color),
            borderRadius: BorderRadius.circular(20),
          ),
          child: Center(
            child: Transform.rotate(
              angle: -math.pi / 14,
              child: Image.network(shoe.imageUrl),
            ),
          ),
        ),
        Container(
          margin: const EdgeInsets.fromLTRB(0, 26, 0, 20),
          child: Text(
            shoe.name,
            style: Theme.of(context).textTheme.titleMedium,
          ),
        ),
        Container(
          margin: const EdgeInsets.only(bottom: 20),
          child: Text(
            shoe.description,
            style: Theme.of(context).textTheme.displayMedium,
          ),
        ),
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: <Widget>[
            Text(
              "\$${shoe.price}",
              style: Theme.of(context).textTheme.titleMedium,
            ),
            BlocBuilder<CartBloc, CartState>(builder: (context, state) {
              if (state is CartLoaded && state.items.containsKey(shoe.id)) {
                return OutlinedButton(
                  style: OutlinedButton.styleFrom(
                    shape: const CircleBorder(),
                    backgroundColor: customColorscheme.primary,
                  ),
                  onPressed: null,
                  child: Image.asset(
                    "assets/images/check.png",
                    width: 10,
                  ),
                );
              } else {
                return ElevatedButton(
                  onPressed: () {
                    context
                        .read<CartBloc>()
                        .add(AddItemToCart(itemToAdd: CartItem.fromShoe(shoe)));
                  },
                  style: ElevatedButton.styleFrom(
                    backgroundColor: customColorscheme.primary,
                  ),
                  child: Text(
                    'Add to cart'.toUpperCase(),
                    style: Theme.of(context).textTheme.titleSmall,
                  ),
                );
              }
            }),
          ],
        ),
      ],
    );
  }
}
