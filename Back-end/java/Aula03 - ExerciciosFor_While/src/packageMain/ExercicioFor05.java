package packageMain;

public class ExercicioFor05 {
	public static void main(String[] args) {
		for (int i = 1; i <= 100; i++) {
			if (i % 3 == 0) {
				System.out.println("Multiple number of 3: " + i);
			}

			if (i % 5 == 0) {
				System.out.println("Multiple number of 5: " + i);
			}
		}
	}
}

// 5.Múltiplos de 3 e 5:Desenvolva um programa que exiba todos os múltiplos de 3 e 5 no intervalo de 1 a 100 usando um loop for.