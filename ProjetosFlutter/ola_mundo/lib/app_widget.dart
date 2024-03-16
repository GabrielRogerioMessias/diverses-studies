import 'package:flutter/material.dart';
import 'package:ola_mundo/home_page.dart';

class AppWidged extends StatelessWidget {
  const AppWidged({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(primarySwatch: Colors.red),
      home: const HomePage(),
    );
  }
}
