import 'dart:math' as math;
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:g_shoes_revamped/blocs/cart/cart_bloc.dart';
import 'package:g_shoes_revamped/models/cart_item_model.dart';
import 'package:g_shoes_revamped/themes/custom_colorscheme.dart';
import 'package:g_shoes_revamped/utils/hex_color.dart';

class CartItemCard extends StatelessWidget {
  const CartItemCard({super.key, required this.cartItem});

  final CartItem cartItem;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 20),
      child: BlocBuilder<CartBloc, CartState>(
        builder: (context, state) {
          if (state is CartLoaded) {
            return Transform.translate(
              offset: const Offset(-20, 0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  Stack(
                    alignment: AlignmentDirectional.center,
                    children: [
                      Container(
                        width: 90,
                        height: 90,
                        decoration: BoxDecoration(
                          color: HexColor.fromHex(cartItem.color),
                          shape: BoxShape.circle,
                        ),
                      ),
                      Transform.rotate(
                        angle: -math.pi / 14.0,
                        child: Image.network(
                          cartItem.imageUrl,
                          fit: BoxFit.fitWidth,
                          scale: 4,
                        ),
                      ),
                    ],
                  ),
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: <Widget>[
                      Container(
                        margin: const EdgeInsets.only(bottom: 10),
                        child: Container(
                          alignment: AlignmentDirectional.centerStart,
                          child: Text(
                            cartItem.name,
                            // 'Some text',
                            style: Theme.of(context).textTheme.titleSmall,
                          ),
                        ),
                      ),
                      Container(
                        margin: const EdgeInsets.only(bottom: 16),
                        child: Text(
                          '\$${cartItem.price}',
                          style: Theme.of(context).textTheme.titleMedium,
                        ),
                      ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: <Widget>[
                          Row(
                            mainAxisAlignment: MainAxisAlignment.start,
                            crossAxisAlignment: CrossAxisAlignment.center,
                            children: <Widget>[
                              OutlinedButton(
                                style: OutlinedButton.styleFrom(
                                  shape: const CircleBorder(),
                                  backgroundColor: const Color(0xFFEEEEEE),
                                  fixedSize: const Size.square(28),
                                  side: const BorderSide(
                                    width: 0,
                                    color: Color(0xFFEEEEEE),
                                  ),
                                ),
                                onPressed: () {
                                  context.read<CartBloc>().add(
                                      DecreaseItemQuantity(
                                          idToUpdate: cartItem.id));
                                },
                                child: Text(
                                  '-',
                                  style:
                                      Theme.of(context).textTheme.displayLarge,
                                ),
                              ),
                              Container(
                                margin: const EdgeInsets.only(bottom: 8),
                                child: Text(
                                  '${cartItem.quantity}',
                                  style: Theme.of(context).textTheme.bodyMedium,
                                ),
                              ),
                              OutlinedButton(
                                style: OutlinedButton.styleFrom(
                                  shape: const CircleBorder(),
                                  backgroundColor: const Color(0xFFEEEEEE),
                                  side: const BorderSide(
                                    width: 0,
                                    color: Color(0xFFEEEEEE),
                                  ),
                                  fixedSize: const Size.square(28),
                                ),
                                onPressed: () {
                                  context
                                      .read<CartBloc>()
                                      .add(AddItemToCart(itemToAdd: cartItem));
                                },
                                child: Text(
                                  '+',
                                  style:
                                      Theme.of(context).textTheme.displayLarge,
                                ),
                              ),
                            ],
                          ),
                          OutlinedButton(
                            style: OutlinedButton.styleFrom(
                              shape: const CircleBorder(),
                              backgroundColor: customColorscheme.primary,
                              side: BorderSide(
                                width: 0,
                                color: customColorscheme.primary,
                                strokeAlign: BorderSide.strokeAlignInside,
                              ),
                              shadowColor: null,
                              fixedSize: const Size.square(28),
                            ),
                            onPressed: () {
                              context.read<CartBloc>().add(
                                  RemoveItemFromCart(idToRemove: cartItem.id));
                            },
                            child: Image.asset(
                              'assets/images/trash.png',
                              width: 10,
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),
                ],
              ),
            );
          } else {
            return Container();
          }
        },
      ),
    );
  }
}
