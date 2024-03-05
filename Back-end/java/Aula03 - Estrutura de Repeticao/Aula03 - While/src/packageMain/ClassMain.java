package packageMain;

import java.util.Scanner;

public class ClassMain {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		boolean response = true;
		int loop = 1;
		
		while(response == true) {
			System.out.println("This is interaction number: " + loop);
			
			System.out.print("Type \"yes\" to continue, or \"no\" to stop the interaction:");
			String option = scanner.nextLine();
			
			if(option.equalsIgnoreCase("yes")) {
				response = true;
				loop++;
				System.out.println("End of loop");
			} else if (option.equalsIgnoreCase("no")) {
				response = false;
			} else {
				response = true;
				System.out.println("This is not a valid option, try again");
			}
			
			
		}
		scanner.close();
		System.out.println("End of program!");
	}
}
