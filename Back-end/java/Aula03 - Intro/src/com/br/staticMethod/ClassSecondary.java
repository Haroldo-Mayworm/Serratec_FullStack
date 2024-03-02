package com.br.staticMethod;

public class ClassSecondary {
	public static void staticText() {
		System.out.println("Secondary class text and does not need an instance!");
	}
	
	public void noStaticText() {
		System.out.println("Secondary class text and do need an instance!");
	}
}