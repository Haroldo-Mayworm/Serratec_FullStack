class People {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  displaysData() {
    console.log(`Name: ${this.name} - Address: ${this.address}`);
  }
}

class Pf extends People {
  constructor(name, address, age) {
    super(name, address);
    this.age = age;
  }

  displaysData() {
    console.log(`Name: ${this.name} - Address: ${this.address} - Age: ${this.age}`);
  }
}

const people = new People('Haroldo', 'RJ');
people.displaysData();

const pf = new Pf('Pedro', 'SP', 18);
pf.displaysData();
