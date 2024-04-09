import 'package:flutter/material.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const AppHome(
      child: CounterApp(),
    );
  }
}

class AppHome extends StatelessWidget {
  const AppHome({super.key, required this.child});
  final Widget child;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Meu App'),
          backgroundColor: Colors.red,
        ),
        body: child,
      ),
    );
  }
}

class CounterApp extends StatefulWidget {
  const CounterApp({super.key});

  @override
  State<StatefulWidget> createState() {
    return CounterHomeState();
  }
}

class CounterHomeState extends State<CounterApp> {
  int counter = 0;
  @override
  Widget build(BuildContext context) {
    return Container(
      width: 500,
      height: 200,
      color: Colors.blueGrey,
      child: GestureDetector(
        child: Center(
          child: Text('Clique aqui $counter'),
        ),
        onTap: () {
          setState(() {
            counter = counter + 1;
          });
        },
      ),
    );
  }
}
