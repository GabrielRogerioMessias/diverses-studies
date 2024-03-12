import 'package:flutter/material.dart';
import 'package:primeiro_exemplo/itens_lista.dart';

class Lista extends StatelessWidget {
  const Lista({super.key});

  @override
  Widget build(BuildContext context) {
    return const Column(
      children: [
        Card(
            color: Colors.cyan,
            child: ListTile(
              leading: Icon(Icons.music_note),
              title: Text("Tears For Fears"),
              subtitle: Text("EveryBody Wants To Rule The World"),
            )),
        ItensLista('Post Malone', 'White Inverson'),
        ItensLista('Mans', 'SubMan')
      ],
    );
  }
}
