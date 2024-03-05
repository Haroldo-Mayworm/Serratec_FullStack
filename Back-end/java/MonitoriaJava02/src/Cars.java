public class Cars {
	private String model;
	private int year;

	public Cars(String model, int year) {
		super();
		this.model = model;
		this.year = year;
	}

	// Getters
	public String getModel() {
		return model;
	}

	public int getYear() {
		return year;
	}

	// Setters
	public void setModel(String model) {
		this.model = model;
	}

	public void setYear(int year) {
		this.year = year;
	}
}
