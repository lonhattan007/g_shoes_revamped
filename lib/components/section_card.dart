import 'package:flutter/material.dart';
import 'package:g_shoes_revamped/themes/custom_colorscheme.dart';

class SectionCard extends StatelessWidget {
  const SectionCard(
      {super.key,
      required this.width,
      required this.height,
      required this.header,
      required this.content});

  final double width;
  final double height;
  final Widget header;
  final Widget content;

  final double decoratorSize = 300;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: width,
      height: height,
      margin: const EdgeInsets.only(bottom: 20),
      clipBehavior: Clip.hardEdge,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(30),
        color: customColorscheme.white,
        boxShadow: [
          BoxShadow(
            color: Colors.grey.withOpacity(0.5),
            spreadRadius: 5,
            blurRadius: 7,
            offset: const Offset(0, 3),
          )
        ],
      ),
      child: Stack(
        children: <Widget>[
          Positioned(
            top: -decoratorSize * 0.4,
            left: -width * 0.5,
            child: Container(
              width: decoratorSize,
              height: decoratorSize,
              decoration: BoxDecoration(
                color: customColorscheme.primary,
                shape: BoxShape.circle,
              ),
            ),
          ),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 28),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                Container(
                  margin: const EdgeInsets.symmetric(vertical: 12),
                  child: Image.asset(
                    'assets/images/nike.png',
                    width: 50,
                    height: 26,
                  ),
                ),
                header,
                content,
              ],
            ),
          ),
        ],
      ),
    );
  }
}
