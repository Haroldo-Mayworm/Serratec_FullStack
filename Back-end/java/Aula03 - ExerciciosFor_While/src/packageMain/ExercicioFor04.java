package packageMain;

public class ExercicioFor04 {
	public static void main(String[] args) {
		int sum = 0;
		for (int i = 1; i <= 100; i += 2) {
			if (i % 2 != 0) {
				sum += i;
			}
		}

		System.out.println("The sum of the first 50 numbers is: " + sum);
	}
}

// 4.Soma de Números Ímpares: Escreva um programa que utiliza um loop for para calcular a soma dos primeiros 50 números ímpares.