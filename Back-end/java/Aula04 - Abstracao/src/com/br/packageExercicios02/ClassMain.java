package com.br.packageExercicios02;

public class ClassMain {

	public static void main(String[] args) {
		Vehicles vehicles01 = new Vehicles("Carro", "Preto", 4);
		Vehicles vehicles02 = new Vehicles("Moto", "Vermelho", 2);
		Vehicles vehicles03 = new Vehicles("Bicicleta", "Azul", 2);
		
		vehicles01.returnDataVehicles();
		vehicles02.returnDataVehicles();
		vehicles03.returnDataVehicles();
	}
}

//2.Desenvolva um sistema simples para representar veículos. Abstraia características
//complexas, como modelo do motor, e concentre-se em atributos essenciais, como tipo de veículo,
//cor e número de rodas.