package com.br.packageExercicios01;

public class People {
	String name;
	int age;
	char gender;
	
	public People(String name, int age, char gender) {
		this.name = name;
		this.age = age;
		this.gender = gender;
	}
	
	public void returnDataPeople() {
		System.out.println("Name: " + this.name);
		System.out.println("Age: " + this.age);
		System.out.println("Gender: " + this.gender);
		System.out.println("----------------------------------------");
	}
}
