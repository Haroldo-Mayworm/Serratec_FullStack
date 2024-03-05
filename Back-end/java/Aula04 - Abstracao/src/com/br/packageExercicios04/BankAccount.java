package com.br.packageExercicios04;

public class BankAccount {
	private double balance;

	public BankAccount(double initialBalance) {
			this.balance = initialBalance;
		}

	public double getBalance() {
		return this.balance;
	}

	public void setBalance(double newBalance) {
		this.balance = newBalance;
	}

	public void deposit(double value) {
		this.balance += value;
		System.out.println("Depósito de R$ " + value + " realizado. Novo saldo: R$ " + this.balance);
	}

	public void withdraw(double value) {
		if (value <= this.balance) {
			this.balance -= value;
			System.out.println("Saque de R$ " + value + " realizado. Novo saldo: R$ " + this.balance);
		} else {
			System.out.println("Saldo insuficiente para saque de R$ " + value);
		}
	}

}
