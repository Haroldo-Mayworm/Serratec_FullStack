package com.br.packageExercicios03;

public class Books {
	String title;
	String autor;
	String genre;
	
	public Books(String title, String autor, String genre) {
		super();
		this.title = title;
		this.autor = autor;
		this.genre = genre;
	}
	
	public void returnDataBook() {
		System.out.println("Title: " + this.title);
		System.out.println("Autor: " + this.autor);
		System.out.println("Genre: " + this.genre);
		System.out.println("----------------------------------------");
	}
}
