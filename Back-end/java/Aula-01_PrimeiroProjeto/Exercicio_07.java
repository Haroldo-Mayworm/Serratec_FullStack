package com.br.executavel;

import java.util.Scanner;

public class Exercicio_07 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		System.out.print("Digite a temperatura em Celsius: ");
		double tempCelcius = scanner.nextDouble();
		
		double tempFahrenheit = (tempCelcius * 9 / 5) + 32;
		
		System.out.print(tempCelcius + " graus Celsius é igual a " + tempFahrenheit + " graus Fahrenheit.");
		
		scanner.close();
	}
}

//7.Desenvolva um programa que converta uma temperatura de Celsius para Fahrenheit. A fórmula é: Fahrenheit = (Celsius * 9/5) + 32.