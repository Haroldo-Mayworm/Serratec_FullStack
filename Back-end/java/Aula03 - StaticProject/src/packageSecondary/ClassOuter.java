package packageSecondary;

import packageMain.ClassSecondary;

public class ClassOuter {
	public static void printText() {
		ClassSecondary cs = new ClassSecondary();
		cs.textNoStatic();
	}
}
