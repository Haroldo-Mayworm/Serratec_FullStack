package com.br.executavel;

import java.util.Scanner;

public class Exercicio_03 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		System.out.print("Digite a nota da primeira prova: ");
		double nota01 = scanner.nextDouble();

		System.out.print("Digite a nota da segunda prova: ");
		double nota02 = scanner.nextDouble();

		if (nota01 >= 60 && nota02 >= 60) {
			System.out.print("Aluno Aprovado!");
		} else {
			System.out.println("Aluno reprovado!");
		}
		
		scanner.close();
	}
}

//3.Desenvolva um programa que determine se um estudante foi aprovado em uma
//disciplina com base nas notas. O aluno é aprovado se a nota for maior ou igual a 60 em ambas
//as provas.