package packageMain;

import java.util.Scanner;

public class ExercicioFor02 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		System.out.print("Enter the multiplication table number: ");
		int number = scanner.nextInt();
		
		for (int i = 0; i <= 10; i++) {
			int multi = number * i;
			System.out.println(number + " X " + i + " = " + multi);
		}
		
		scanner.close();
	}
}

// 2.Tabuada de Multiplicação: Crie um programa que solicita ao usuário um número e exibe a tabuada de multiplicação desse número usando um loop for.