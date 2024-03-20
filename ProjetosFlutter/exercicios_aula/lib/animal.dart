import 'package:flutter/material.dart';

class Animal extends StatelessWidget {
  final String name;
  final Color colorHouse;

  const Animal({super.key, required this.name, required this.colorHouse});

  @override
  Widget build(BuildContext context) {
    return DecoratedBox(
      decoration: BoxDecoration(
        color: colorHouse,
        borderRadius: BorderRadius.circular(24),
      ),
      child: Center(
        child: Padding(
          padding: const EdgeInsets.all(15.0),
          child: Text(name),
        ),
      ),
    );
  }
}
