package vehicles;

public class Vehicle {
    private String model;
    private String color;

    public Vehicle(String model, String color) {
        this.model = model;
        this.color = color;
    }

    public String getModel() {
        return model;
    }

    public String getColor() {
        return color;
    }
}
