package com.br.executavel;

import java.util.Scanner;

public class Exercicio_04 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		System.out.print("Escreva a primeira string: ");
		String frase01 = scanner.nextLine();

		System.out.print("Escreva a segunda string: ");
		String frase02 = scanner.nextLine();

		if (frase01.equals(frase02)) {
			System.out.print("As frases são iguais!");
		} else {
			System.out.print("As frases não são iguais!");
		}

		scanner.close();
	}
}

//4.Implemente um programa que compare duas strings e determine se são iguais.