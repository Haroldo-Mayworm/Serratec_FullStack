package com.br.executavel;

import java.util.Scanner;

public class Exercicio_05 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		System.out.print("Digite um número inteiro: ");
		int numero = scanner.nextInt();
		
		if (numero >= 1 && numero <= 100) {
			System.out.print("Seu número está entre 1 - 100!");
		} else {
			System.out.print("Seu número NÃO está entre 1 - 100!");
		}
		
		scanner.close();
	}
}

//5.Crie um programa que verifique se um número digitado pelo usuário está entre 1 e 100.