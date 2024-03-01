package com.br.executavel;

import java.util.Scanner;

public class Exercicio_06 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		System.out.print("Digite o raio do circulo: ");
		double raio = scanner.nextDouble();
		
		double areaCirculo = Math.PI * (raio * raio);
		
		System.out.print("A área do circulo com raio de " + raio + " é: " + areaCirculo);
		
		scanner.close();
	}
}

//6.Elabore um programa que calcule a área de um círculo com base no raio informado pelo usuário.