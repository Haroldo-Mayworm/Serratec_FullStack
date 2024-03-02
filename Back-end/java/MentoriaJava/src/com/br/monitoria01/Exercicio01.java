package com.br.monitoria01;

import java.util.Scanner;
import javax.swing.JOptionPane;

public class Exercicio01 {
	public static void main(String[] args) {
		// Scanner
//		Scanner scanner = new Scanner(System.in);
//		
//		System.out.print("Enter your name: ");
//		String nameUser = scanner.nextLine();
//		
//		System.out.print("Enter your age: ");
//		int ageUser = scanner.nextInt();
//		
//		if (ageUser >= 18) {
//			System.out.println(nameUser + ", you are " + ageUser + " years old and of legal age!");
//		} else {
//			System.out.println(nameUser + ", you are underage!");			
//		}
//		scanner.close();
		
		// JOptionPane
        String nameUser = JOptionPane.showInputDialog("Enter your name:");

        String ageInput = JOptionPane.showInputDialog("Enter your age:");
        int ageUser = Integer.parseInt(ageInput);

        if (ageUser >= 18) {
            JOptionPane.showMessageDialog(null, nameUser + ", you are " + ageUser + " years old and of legal age!");
        } else {
            JOptionPane.showMessageDialog(null, nameUser + ", you are underage!");
        }
	}
}

//1.Desenvolva uma aplicação simples que solicita ao usuário a entrada do nome e da idade. 
//Em seguida, utilize uma ferramenta de algoritmos ou uma linguagem de programação que você já estudou para determinar se a pessoa é maior ou menor de idade.
//
//Faça com a classe Scanner e depois faça com a classe JOptionPane.