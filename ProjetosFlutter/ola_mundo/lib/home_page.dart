//Criando classes com estados
import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() {
    return HomePageState();
  }
}

class HomePageState extends State<HomePage> {
  int counter = 0;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Center(
            child: Text(
          'HomePage',
          style: TextStyle(fontSize: 44, color: Colors.deepOrangeAccent),
        )),
        backgroundColor: Colors.indigo,
      ),
      body: Center(
          child: GestureDetector(
        child: Text(
          'Contador: $counter',
          style: const TextStyle(color: Colors.deepPurple, fontSize: 35),
        ),
        onTap: () {
          setState(() {
            counter++;
          });
        },
      )),
      floatingActionButton: FloatingActionButton(
        child: const Icon(Icons.add),
        onPressed: () {
          setState(() {
            counter++;
          });
        },
      ),
    );
  }
}
