public class ClassMain {
    public static void main(String[] args) {
        Vehicle carro = new Car();
        Vehicle moto = new Motorcicle();
        Vehicle bicicleta = new Bike();

        ligarEExecutar(carro);
        desligarEExecutar(carro);

        ligarEExecutar(moto);
        desligarEExecutar(moto);

        ligarEExecutar(bicicleta);
        desligarEExecutar(bicicleta);
    }

    public static void ligarEExecutar(Vehicle veiculo) {
        veiculo.ligar();
    }

    public static void desligarEExecutar(Vehicle veiculo) {
        veiculo.desligar();
    }
}
