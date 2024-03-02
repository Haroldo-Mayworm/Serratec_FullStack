package packageMain;

import java.util.Scanner;

public class ExercicioWhile03 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		System.out.print("Write a positive integer: ");
		int i = scanner.nextInt();

		while (i >= 1) {
			System.out.println(i);
			i--;
		}
		
		scanner.close();
	}
}

//3. Escreva um programa que solicite ao usuário um número inteiro positivo e, em seguida, utilize
//um loop while para imprimir uma contagem regressiva desse número até 1. Por exemplo, se o
//usuário inserir 5, a saída seria: 5-4-3-2-1.