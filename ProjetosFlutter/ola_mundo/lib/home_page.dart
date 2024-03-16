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
      // Componentes como Container são single render, ou seja, quando colocamos um dentro do outro
      // e passamos instruções como 2 quadrados, o de dentro sendo menor e o de fora maior
      // a cor que passarmos para o quadrado 2 será a mesma do quadrado 1.
      // para resolver isso, devemos usar elementos de alinhamento, pois assim teremos um multi render e poderemos ver a cor
      //dos dois quadrados.
      body: Container(
        width: 200,
        height: 200,
        color: Colors.black,
        child: Align(
          alignment: Alignment.center,
          child: Container(
            width: 50,
            height: 50,
            color: const Color.fromARGB(255, 46, 46, 48),
          ),
        ),
      ),
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
