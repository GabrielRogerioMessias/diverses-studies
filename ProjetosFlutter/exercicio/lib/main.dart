import 'package:flutter/material.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          backgroundColor: const Color(0xFFEF5350),
          title: const Text("Ola"),
        ),
        body: const Column(
          children: [
            Card(
              color: Color(0xFFEF5352),
            ),
            Card(
              color: Color(0xFFEF5352),
            ),
            Card(
              color: Color(0xFFEF5352),
            )
          ],
        ),
      ),
    );
  }
}
