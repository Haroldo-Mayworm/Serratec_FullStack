package com.br.monitoria01;

import java.util.Scanner;

public class Exercicio03 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		for (int i = 1; i <= 5; i++) {
			System.out.println("Employee #" + i);

			System.out.print("Name: ");
			String name = scanner.nextLine();

			System.out.print("CPF: ");
			String cpf = scanner.nextLine();

			System.out.print("Gross salary: ");
			double grossSalary = scanner.nextDouble();
			scanner.nextLine();

			double discountINSS = 0;
			if (grossSalary >= 2000) {
				discountINSS = grossSalary * 0.11;
			} else if (grossSalary >= 1500) {
				discountINSS = grossSalary * 0.09;
			} else {
				discountINSS = grossSalary * 0.08;
			}

			double discountVT = 0;
			if (grossSalary >= 1000) {
				discountVT = grossSalary * 0.06;
			} else {
				discountVT = grossSalary * 0.05;
			}

			double netSalary = grossSalary - discountINSS - discountVT;

			System.out.println("------------------------------");
			System.out.println("Nome: " + name);
			System.out.println("CPF: " + cpf);
			System.out.printf("Salário Bruto: R$ %.2f%n", grossSalary);
			System.out.printf("Desconto INSS: R$ %.2f%n", discountINSS);
			System.out.printf("Desconto Vale-Transporte: R$ %.2f%n", discountVT);
			System.out.printf("Salário Líquido: R$ %.2f%n", netSalary);
			System.out.println("------------------------------");
		}

		scanner.close();

//        int x = 1;
//        while (x <= 5) {
//            System.out.println("Employee #" + x);
//
//            System.out.print("Name: ");
//            String name = scanner.nextLine();
//
//            System.out.print("CPF: ");
//            String cpf = scanner.nextLine();
//
//            System.out.print("Gross salary: ");
//            double grossSalary = scanner.nextDouble();
//            scanner.nextLine();
//
//            double discountINSS = 0;
//            if (grossSalary >= 2000) {
//            	discountINSS = grossSalary * 0.11;
//            } else if (grossSalary >= 1500) {
//            	discountINSS = grossSalary * 0.09;
//            } else {
//            	discountINSS = grossSalary * 0.08;
//            }
//
//            double discountVT = 0;
//            if (grossSalary >= 1000) {
//            	discountVT = grossSalary * 0.06;
//            } else {
//            	discountVT = grossSalary * 0.05;
//            }
//
//            double netSalary = grossSalary - discountINSS - discountVT;
//
//            System.out.println("------------------------------");
//            System.out.println("Nome: " + name);
//            System.out.println("CPF: " + cpf);
//            System.out.printf("Salário Bruto: R$ %.2f%n", grossSalary);
//            System.out.printf("Desconto INSS: R$ %.2f%n", discountINSS);
//            System.out.printf("Desconto Vale-Transporte: R$ %.2f%n", discountVT);
//            System.out.printf("Salário Líquido: R$ %.2f%n", netSalary);
//            System.out.println("------------------------------");
//
//            x++;
//        }
	}
}
