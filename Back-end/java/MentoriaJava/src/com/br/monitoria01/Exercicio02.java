package com.br.monitoria01;

import java.util.Scanner;
import javax.swing.JOptionPane;

public class Exercicio02 {
	public static void main(String[] args) {
		// Scanner
//		Scanner scanner = new Scanner(System.in);
//		
//		String classification;
//		String result;
//		
//		System.out.print("Enter your name: ");
//		String nameUser = scanner.nextLine();
//		
//		System.out.print("Enter your age: ");
//		int ageUser = scanner.nextInt();
//		
//		if (ageUser < 18) {
//			classification = "young";
//		} else if (ageUser < 65) {
//			classification = "adult";
//		} else {
//			classification = "elderly";
//		}
//		
//		System.out.print("Enter the test grade 01: ");
//		double String nameUser = JOptionPane.showInputDialog("Enter your name:"); = scanner.nextDouble();
//		
//		System.out.print("Enter the test grade 02: ");
//		double gradeTest02 = scanner.nextDouble();
//		
//		double averageTest = (gradeTest01 + gradeTest02) / 2;
//		
//		if (averageTest < 5) {
//			result = "Disapproved";
//		} else if (averageTest == 5) {
//			result = "Recovery";
//		} else {
//			result = "Approved";
//		}
//		
//		System.out.println(nameUser + ", you are a " + classification + ". You were " + result + " in test with an average of " + averageTest);
//		scanner.close();

		// JOptionPane
		String classification;
		String result;

		String nameUser = JOptionPane.showInputDialog("Enter your name:");

		String ageInput = JOptionPane.showInputDialog("Enter your age:");
		int ageUser = Integer.parseInt(ageInput);

		if (ageUser < 18) {
			classification = "young";
		} else if (ageUser < 65) {
			classification = "adult";
		} else {
			classification = "elderly";
		}

		String gradeTest01Input = JOptionPane.showInputDialog("Enter the test grade 01:");
		double gradeTest01 = Double.parseDouble(gradeTest01Input);

		String gradeTest02Input = JOptionPane.showInputDialog("Enter the test grade 02:");
		double gradeTest02 = Double.parseDouble(gradeTest02Input);

		double averageTest = (gradeTest01 + gradeTest02) / 2;

		if (averageTest < 5) {
			result = "Disapproved";
		} else if (averageTest == 5) {
			result = "Recovery";
		} else {
			result = "Approved";
		}

		JOptionPane.showMessageDialog(null, nameUser + ", you are a " + classification + ". You were " + result
				+ " in test with an average of " + averageTest);
	}
}

//2. Desenvolva uma aplicação que realiza duas tarefas distintas. Primeiro, solicita ao usuário a entrada do nome e da idade. 
//Em seguida, com base na idade, classifica a pessoa em "Menor de Idade", "Maior de Idade" ou "Idade Feliz". 
//Após essa classificação, a aplicação pede a entrada das notas das provas 01 e 02. O programa calcula a média aritmética 
//entre essas notas e devolve uma das seguintes respostas: "Reprovado", "Recuperação" ou "Aprovado".
//
//Faça com a classe Scanner e depois faça com a classe JOptionPane.