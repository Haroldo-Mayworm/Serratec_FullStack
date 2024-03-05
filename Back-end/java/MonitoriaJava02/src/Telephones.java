public class Telephones {
	private String number;
	private String carrier;

	public Telephones(String number, String carrier) {
		super();
		this.number = number;
		this.carrier = carrier;
	}

	// Getters
	public String getNumber() {
		return number;
	}

	public String getCarrier() {
		return carrier;
	}

	// Setters
	public void setNumber(String number) {
		this.number = number;
	}

	public void setCarrier(String carrier) {
		this.carrier = carrier;
	}
}
