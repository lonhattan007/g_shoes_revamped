import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:g_shoes_revamped/components/product_card.dart';
import 'package:g_shoes_revamped/components/section_card.dart';
import 'package:g_shoes_revamped/models/shoe_model.dart';

class ProductsSection extends StatefulWidget {
  const ProductsSection({super.key});

  @override
  State<ProductsSection> createState() => _ProductsSectionState();
}

class _ProductsSectionState extends State<ProductsSection> {
  var _myShoes = <Shoe>[];
  double width = 360;
  double height = 600;

  Future<void> loadData() async {
    final String jsonString = await rootBundle.loadString("data/shoes.json");
    List<dynamic> shoes = jsonDecode(jsonString)['shoes'];

    var newState = <Shoe>[];

    for (final item in shoes) {
      newState.add(Shoe.fromJson(item));
    }

    setState(() {
      _myShoes = newState;
    });
  }

  @override
  void initState() {
    super.initState();
    loadData();
  }

  @override
  Widget build(BuildContext context) {
    return SectionCard(
      width: width,
      height: height,
      header: Container(
        margin: const EdgeInsets.symmetric(vertical: 16),
        child: Text(
          'Our Products',
          style: Theme.of(context).textTheme.titleLarge,
        ),
      ),
      content: Expanded(
        child: ScrollConfiguration(
          behavior: ScrollConfiguration.of(context).copyWith(scrollbars: false),
          child: ListView.builder(
            itemCount: _myShoes.length,
            itemBuilder: (BuildContext context, int index) {
              if (index == 0) {
                return Container(
                  padding: const EdgeInsets.only(bottom: 40),
                  child: ProductCard(shoe: _myShoes[index]),
                );
              } else {
                return Container(
                  padding: const EdgeInsets.symmetric(vertical: 40),
                  child: ProductCard(shoe: _myShoes[index]),
                );
              }
            },
          ),
        ),
      ),
    );
  }
}
