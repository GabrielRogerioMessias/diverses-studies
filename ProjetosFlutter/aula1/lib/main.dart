import 'package:flutter/material.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: Scaffold(
        body: Center(
          child: Column(
            children: <Widget>[
              Text('Hello Wordl!'),
              Text('Hello World!'),
              Expanded(
                  child: FittedBox(
                child: FlutterLogo(),
              ))
            ],
          ),
        ),
      ),
    );
  }
}
