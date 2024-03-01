package com.br.executavel;

import java.util.Scanner;

public class Exercicio_02 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		System.out.print("Digite um ano: ");
		int ano = scanner.nextInt();

		if ((ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)) {
			System.out.println(ano + " é um ano bissexto.");
		} else {
			System.out.println(ano + " não é um ano bissexto.");
		}

		scanner.close();
	}

}

//2.Crie um programa que verifica se um ano é bissexto. Um ano é bissexto se for divisível por 4,
//mas não por 100, a menos que seja divisível por 400.