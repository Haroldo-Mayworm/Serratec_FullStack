package com.br.exercicios;

import java.util.Scanner;

public class Exercicio_01 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		System.out.print("Digite um número: ");
		String numberInput01 = scanner.nextLine();

		System.out.print("Digite outro número: ");
		String numberInput02 = scanner.nextLine();

		try {
			double division;
			double number01 = Double.parseDouble(numberInput01);
			double number02 = Double.parseDouble(numberInput02);

			division = number01 / number02;

			System.out.println("O resultado da divisão é: " + division);

		} catch (Exception e) {
			System.out.println("Erro: " + e.getMessage());
		} finally {
			if (scanner != null) {
				scanner.close();
			}
		}
	}
}
