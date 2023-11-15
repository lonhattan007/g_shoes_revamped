import 'package:flutter/material.dart';
import 'package:g_shoes_revamped/screens/shopping_screen/shopping_screen.dart';
import 'themes/custom_colorscheme.dart';

import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:g_shoes_revamped/blocs/cart/cart_bloc.dart';


void main() {
  // Bloc observer = const CounterObserver();
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MultiBlocProvider(
      providers: [
        BlocProvider(create: (context) => CartBloc()..add(LoadCart())),
      ],
      child: MaterialApp(
        title: 'Golden Sneaker',
        theme: ThemeData(
          brightness: Brightness.light,
          fontFamily: 'Rubik',
          textTheme: TextTheme(
            titleLarge: TextStyle(
              fontSize: 24,
              fontWeight: FontWeight.bold,
              color: customColorscheme.black,
            ),
            titleMedium: TextStyle(
              fontSize: 20,
              fontWeight: FontWeight.bold,
              color: customColorscheme.black,
            ),
            titleSmall: TextStyle(
              fontSize: 14,
              fontWeight: FontWeight.bold,
              color: customColorscheme.black,
            ),
            bodyMedium: TextStyle(
              fontSize: 14,
              fontWeight: FontWeight.normal,
              color: customColorscheme.black,
            ),
            displayMedium: TextStyle(
              fontSize: 13,
              height: 2.0,
              fontWeight: FontWeight.normal,
              color: customColorscheme.grey,
            ),
            displayLarge: TextStyle(
              fontSize: 16,
              fontWeight: FontWeight.bold,
              color: customColorscheme.black,
            )
          ),
          useMaterial3: true,
        ),
        home: const ShoppingScreen(title: 'Golden Sneaker'),
      ),
    );
  }
}

