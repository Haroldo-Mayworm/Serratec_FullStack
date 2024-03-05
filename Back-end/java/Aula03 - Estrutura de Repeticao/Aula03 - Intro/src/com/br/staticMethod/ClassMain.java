package com.br.staticMethod;

public class ClassMain {
	public static void main(String[] args) {
		System.out.println("Main class text!");
		
		// Method Static
		ClassSecondary.staticText();
		
		// Method no Static
		ClassSecondary cs = new ClassSecondary();
		cs.noStaticText();
	}
}