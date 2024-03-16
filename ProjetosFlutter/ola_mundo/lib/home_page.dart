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
    return Container(
      child: Center(
          child: GestureDetector(
        child: Card(
          child: Text(
            'Contador: $counter',
            style: const TextStyle(color: Colors.deepPurple, fontSize: 55),
          ),
        ),
        onTap: () {
          setState(() {
            counter++;
          });
        },
      )),
    );
  }
}
