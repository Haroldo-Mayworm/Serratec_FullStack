package com.br.exercicios;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class Exercicio_02 {
	public static void main(String[] args) {
		try {
			File arquivo = new File("arquivo.txt");
			FileReader fileReader = new FileReader(arquivo);
			BufferedReader reader = new BufferedReader(fileReader);

			String linha;

			while ((linha = reader.readLine()) != null) {
				System.out.println(linha);
			}

			reader.close();

		} catch (FileNotFoundException e) {
			System.out.println("Arquivo não encontrado: " + e.getMessage());
		} catch (IOException e) {
			System.out.println("Erro de leitura do arquivo: " + e.getMessage());
		}
	}
}
