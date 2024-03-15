public class Bike implements Vehicle {
    @Override
    public void ligar() {
        System.out.println("Pedalando");
    }

    @Override
    public void desligar() {
        System.out.println("Parando de pedalar");
    }
}
