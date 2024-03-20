import 'package:exercicios_aula/animal.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.lime,
          title: const Text('Anymals List'),
        ),
        body: const Center(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              CircleAvatar(
                  radius: 50, backgroundImage: AssetImage('images/jaja.jpeg')),
              Text('Jaja'),
              SizedBox(
                height: 10,
              ),
              Animal(name: 'Horse', colorHouse: Colors.brown),
              SizedBox(
                height: 12,
              ),
              Animal(name: 'Pig', colorHouse: Colors.pinkAccent),
              SizedBox(
                height: 12,
              ),
              Animal(name: 'Bird', colorHouse: Colors.blueAccent),
              SizedBox(height: 12),
            ],
          ),
        ),
      ),
    );
  }
}
