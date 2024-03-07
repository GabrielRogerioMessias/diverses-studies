import 'dart:io';
import 'dart:typed_data';

import 'package:flutter/material.dart';

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
        body: Column(
          children: [
            Container(
              child: const Card(
                  color: Colors.cyan,
                  child: ListTile(
                    leading: Icon(Icons.music_note),
                    title: Text("Tears For Fears"),
                    subtitle: Text("EveryBody Wants To Rule The World"),
                  )),
            ),
            const Card(
              color: Colors.blueGrey,
              child: ListTile(
                leading: Icon(Icons.music_note),
                title: Text("Post Malone"),
                subtitle: Text("White Inverson"),
              ),
            ),
            const Card(
                child: ListTile(
              leading: Icon(Icons.music_note),
              title: Text("Tears For Fears"),
              subtitle: Text("Salt"),
            ))
          ],
        ),
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
