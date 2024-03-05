package com.br.packageMain;

public class Animal {
	String name;
	int age;
	String habitat;
	
	public Animal(String name, int age, String habitat) {
		this.name = name;
		this.age = age;
		this.habitat = habitat;
	}

	public void returnDataAnimal() {
		System.out.println("Name: " + this.name);
		System.out.println("Age: " + this.age);
		System.out.println("Habitat: " + this.habitat);
		System.out.println("----------------------------------------");
	}
}
