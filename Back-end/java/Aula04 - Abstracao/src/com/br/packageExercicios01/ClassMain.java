package com.br.packageExercicios01;

public class ClassMain {

	public static void main(String[] args) {
		People people01 = new People("João", 17, 'm');
		People people02 = new People("Jean", 20, 'm');
		People people03 = new People("Aline", 36, 'f');
		
		people01.returnDataPeople();
		people02.returnDataPeople();
		people03.returnDataPeople();
	}
}

//1.Crie uma classe em que cada instância represente uma pessoa. Abstraia os detalhes
//irrelevantes, como número de identificação, endereço e detalhes específicos. Foque em
//características essenciais, como nome, idade e talvez profissão.