package packageMain;

import packageSecondary.ClassOuter;

public class ClassMain {

	public static void main(String[] args) {
		System.out.println("This code is running on ClassMain!");
		
		ClassSecondary.textStatic();
		
		ClassOuter.printText();
	}
}