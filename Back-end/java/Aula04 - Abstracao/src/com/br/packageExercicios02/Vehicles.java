package com.br.packageExercicios02;

public class Vehicles {
	String type;
	String color;
	int numWheel;
	
	public Vehicles(String type, String color, int numWheel) {
		this.type = type;
		this.color = color;
		this.numWheel = numWheel;
	}

	public void returnDataVehicles() {
		System.out.println("Type: " + this.type);
		System.out.println("Color: " + this.color);
		System.out.println("NumWheel: " + this.numWheel);
		System.out.println("----------------------------------------");
	}
}
