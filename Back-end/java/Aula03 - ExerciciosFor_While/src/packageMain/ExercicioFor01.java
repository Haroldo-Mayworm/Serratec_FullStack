package packageMain;

public class ExercicioFor01 {
	public static void main(String[] args) {
		int sum = 0;
		for (int i = 0; i <= 100; i += 2) {
			if (i % 2 == 0) {
				sum += i;
			}
		}
		
		System.out.println("The sum of the first 50 numbers is: " + sum);
	}
}

// 1.Soma de Números Pares: Escreva um programa que utiliza um loop for para calcular a soma dos primeiros 50 números pares.