package com.br.executavel;

import java.util.Scanner;

public class Exercicio_08 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		System.out.print("Escreva seu nome e sobrenome: ");
		String nome = scanner.nextLine();
		
		System.out.println("Seja bem vindo, " + nome + "!");
		
		scanner.close();
	}
}

//8.Escreva um programa que solicite o nome e sobrenome do usuário e exiba a mensagem de boas-vindas usando concatenação.