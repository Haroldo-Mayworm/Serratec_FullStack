package packageMain;

import java.util.Scanner;

public class ExercicioWhile04 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		boolean response = true;
		
		while (response == true) {
			System.out.print("Enter a Celsius temperature: ");
			double tempCelsius = scanner.nextDouble();
			
			double tempFahrenheit = (tempCelsius * 1.8) + 32;
			System.out.println("Fahrenheit temperature: " + tempFahrenheit);
			
			System.out.print("Type \"yes\" to continue, or \"no\" to stop the interaction:");
			String option = scanner.nextLine();
			
			if(option.equalsIgnoreCase("yes")) {
				response = true;
			} else if (option.equalsIgnoreCase("no")) {
				response = false;
			} else {
				response = true;
				System.out.println("This is not a valid option, try again");
			}
		}
		
		scanner.close();
	}
}

// 4.Crie um programa que converte temperaturas de Celsius para Fahrenheit. Solicite ao usuário a
//entrada em Celsius e utilize um loop while para continuar as conversões até que o usuário decida parar.