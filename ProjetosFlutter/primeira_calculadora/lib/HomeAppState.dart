import 'package:flutter/material.dart';
import 'package:primeira_tela_botao/home_app.dart';

class HomeAppState extends State<HomeApp> {
  int counter = 0;
  final firstNumber = TextEditingController();
  final secondNumber = TextEditingController();
  int number1 = 0;
  int number2 = 0;
  int result = 0;
  @override
  void dispose() {
    firstNumber.dispose();
    secondNumber.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        home: Scaffold(
      appBar: AppBar(
        title: const Center(
            child: Text('Calculadora', style: TextStyle(fontSize: 25))),
        backgroundColor: Colors.blueGrey,
      ),
      body: Container(
          child: Center(
        child: Column(
          children: <Widget>[
            TextField(
              controller: firstNumber,
              keyboardType: TextInputType.number,
              decoration: const InputDecoration(labelText: 'Digite um número'),
            ),
            TextField(
              controller: secondNumber,
              keyboardType: TextInputType.number,
              decoration:
                  const InputDecoration(labelText: 'Digite outro número'),
            ),
            ElevatedButton(
                onPressed: () {
                  setState(() {
                    number1 = int.tryParse(firstNumber.text) ?? 0;
                    number2 = int.tryParse(secondNumber.text) ?? 0;
                    result = number1 + number2;
                  });
                },
                style: ElevatedButton.styleFrom(backgroundColor: Colors.amber),
                child: const Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[Text('Somar')],
                )),
            Container(
                decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(10),
                    color: Colors.black38),
                child: Center(child: Text('O resultado da soma é: $result'))),
          ],
        ),
      )),
    ));
  }
}
