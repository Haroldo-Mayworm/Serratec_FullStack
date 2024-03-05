public class ClassMain {
	public static void main(String[] args) {
		// Book
		Books book = new Books("Java Programming", "John Doe");
		
		System.out.println("Book");
		System.out.println("Title: " + book.getTitle());
		System.out.println("Author: " + book.getAuthor());
		System.out.println("------------------------------");

		// Person
		Persons person = new Persons("Alice", 30);

		System.out.println("Person");
		System.out.println("Name: " + person.getName());
		System.out.println("Age: " + person.getAge());
		System.out.println("------------------------------");

		// Car
		Cars car = new Cars("Toyota Corolla", 2022);

		System.out.println("Car");
		System.out.println("Model: " + car.getModel());
		System.out.println("Year: " + car.getYear());
		System.out.println("------------------------------");

		// Product
		Products product = new Products("Laptop", 1200.50);

		System.out.println("Product");
		System.out.println("Name: " + product.getName());
        System.out.println("Price: $" + product.getPrice());
        System.out.println("------------------------------");
        
     // Student
        Students student = new Students("Bob", 25, "Computer Science");

		System.out.println("Student");
        System.out.println("Name: " + student.getName());
        System.out.println("Age: " + student.getAge());
        System.out.println("Course: " + student.getCourse());
        System.out.println("------------------------------");

        // Circle
        Circles circle = new Circles(5.0);

		System.out.println("Circle");
        System.out.println("Radius: " + circle.getRadius());
        System.out.println("------------------------------");

        // Employee
        Employees employee = new Employees("Mary", "Manager", 2500.75);

		System.out.println("Employee");
        System.out.println("Name: " + employee.getName());
        System.out.println("Position: " + employee.getPosition());
        System.out.println("Salary: $" + employee.getSalary());
        System.out.println("------------------------------");

        // Telephone
        Telephones phone = new Telephones("123-456-7890", "Verizon");

		System.out.println("Telephone");
        System.out.println("Number: " + phone.getNumber());
        System.out.println("Carrier: " + phone.getCarrier());
        System.out.println("------------------------------");

        // Animal
        Animals animal = new Animals("Tiger", "Jungle");

		System.out.println("Animal");
        System.out.println("Species: " + animal.getSpecies());
        System.out.println("Habitat: " + animal.getHabitat());
        System.out.println("------------------------------");
	}
}
