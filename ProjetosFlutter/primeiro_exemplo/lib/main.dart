import 'package:flutter/material.dart';
import 'package:primeiro_exemplo/lista.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: true,
      home: Scaffold(
        body: const Lista(),
        appBar: AppBar(
          title: const Text("Music of the Moments"),
          backgroundColor: const Color(0xFF0077ED),
        ),
        floatingActionButton: FloatingActionButton(
          onPressed: () => (),
          child: const Icon(Icons.add),
        ),
      ),
    );
  }
}
