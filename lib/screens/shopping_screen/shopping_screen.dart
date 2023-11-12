import 'package:flutter/material.dart';
import 'package:g_shoes_revamped/themes/custom_colorscheme.dart';
import 'package:g_shoes_revamped/components/background_animation.dart';
import 'package:g_shoes_revamped/components/cart_section.dart';
import 'package:g_shoes_revamped/components/products_section.dart';

class ShoppingScreen extends StatefulWidget {
  const ShoppingScreen({super.key, required this.title});

  final String title;

  @override
  State<ShoppingScreen> createState() => _ShoppingScreenState();
}

class _ShoppingScreenState extends State<ShoppingScreen> {
  // final _cartBloc = CartBloc();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: customColorscheme.white,
        body: Stack(
          children: <Widget>[
            const BackgroundAnimation(),
            Center(
              child: LayoutBuilder(
                  builder: (BuildContext context, BoxConstraints constraints) {
                if (constraints.maxWidth > 800) {
                  return const Row(
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    children: <Widget>[
                      ProductsSection(),
                      CartSection(),
                    ],
                  );
                } else {
                  return Expanded(
                    child: ListView.builder(
                      itemCount: 2,
                      itemBuilder: (BuildContext context, int index) {
                        if (index == 0) {
                          return Container(
                            margin: const EdgeInsets.symmetric(vertical: 20, horizontal: 177),
                            child: const ProductsSection(),
                          );
                        } else {
                          return Container(
                            margin: const EdgeInsets.symmetric(vertical: 20, horizontal: 177),
                            child: const CartSection(),
                          );
                        }
                      },
                    ),
                  );
                }
              }),
            ),
          ],
        ));
  }
}
