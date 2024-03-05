package com.br.packageExercicios04;

public class ClassMain {
	public static void main(String[] args) {
		BankAccount bankAccount = new BankAccount(0);
		System.out.println("Saldo inicial: R$ " + bankAccount.getBalance());

		bankAccount.deposit(500);
		bankAccount.withdraw(200);
		bankAccount.getBalance();

		System.out.println("Saldo final: R$ " + bankAccount.getBalance());
	}
}
