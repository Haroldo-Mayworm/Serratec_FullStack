package packageMain;

import java.util.Scanner;

public class ExercicioWhile05 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

        String password = "password123";
        String pwUser;

        while (true) {
            System.out.print("Enter the program password: ");
            pwUser = scanner.nextLine();

            if (pwUser.equals(password)) {
                System.out.println("Correct password! Access permitted.");
                break;
            } else {
                System.out.println("Incorrect password! Try again.");
            }
        }

        scanner.close();
	}
}

// 5. Crie um programa que simule uma verificação de senha. Defina uma senha fixa no programa
//(por exemplo, "senha123"). Solicite ao usuário que digite uma senha. Utilize um loop while para
//permitir tentativas até que o usuário acerte a senha. A cada tentativa incorreta, imprima uma
//mensagem indicando que a senha está incorreta e solicite outra tentativa. Quando o usuário acertar
//a senha, imprima uma mensagem de sucesso e encerre o programa.