package packageMain;

public class ClassSecondary {
	public static void textStatic() {
		System.out.println("Static text from the ClassSecondary");
	}
	
	public void textNoStatic() {
		System.out.println("Text from the secondary class, called in the external class and printed in the main class!");
	}
}