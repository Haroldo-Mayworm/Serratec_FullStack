package com.br.executavel;

import java.util.Scanner;

public class Exercicio_01 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		System.out.print("Digite um número inteiro: ");
		int numero = scanner.nextInt();

		if (numero > 0 && numero % 2 != 0) {
			System.out.println("O número " + numero + " é positivo e ímpar ao mesmo tempo.");
		} else {
			System.out.println("O número não é positivo e ímpar ao mesmo tempo.");
		}

		scanner.close();
	}
}

//1.Escreva um programa que verifica se um número inteiro digitado pelo usuário é positivo e
//ímpar ao mesmo tempo.