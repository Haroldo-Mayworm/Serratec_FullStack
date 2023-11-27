// Exercícios 01
/* let numbers: number[] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

numbers.forEach((element) => {
  console.log(element);
}); */

// Exercício 02
/* let numbers: number[] = [15, 9, 2, 23, 18];

numbers[Number(prompt(`Qual posição você quer alterar? 0 - 4`))] = Number(prompt(`Qual número você quer inserir?`));

console.log(numbers); */

// Exercícios 03
/* let state = [];

for (let i = 0; i <= 4; i++) {
  state[i] = prompt(`Digite o nome de um estado brasileiro:`);
}

for (let i = 0; i <= state.length; i += 2) {
  if (i % 2 == 0) {
    console.log(state[i]);
  }
} */

// Exercício 04
/* let numbers: number[] = [];

for (let i = 0; i < 10; i++) {
  numbers[i] = Number(prompt(`Digite um número: `));
}

let sum: number = 0
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

let average = (sum / numbers.length).toFixed(2);
console.log(average); */

// Exercício 05
/* let numbers: number[] = [];

for (let i = 0; i < 8; i++) {
  numbers[i] = Number(prompt(`Digite um número`));
}

let numeroMaior = Math.max(...numbers);
let numeroMenor = Math.min(...numbers);

console.log(`Número maior: ${numeroMaior} \nNúmero Menor: ${numeroMenor}`); */

// Exercício 06
/* let numbers: number[] = [];
let biggerTen: number = 0;

for (let i = 0; i < 10; i++) {
  numbers[i] = Number(prompt(`Digite um número`));
  if (numbers[i] > 10) {
    biggerTen++;
  }
}

console.log(`${biggerTen} números digitados são maiores que 10!`); */

// Exercício 07
/* let numbers: number[] = [];
let numberEven: number = 0;
let numberOdd: number = 0;

for (let i = 0; i < 7; i++) {
  numbers[i] = Number(prompt(`Digite um número`));
  if (numbers[i] % 2 == 0) {
    numberEven++;
  } else {
    numberOdd++;
  }
}
console.log(`Números pares: ${numberEven} \nNúmeros impares: ${numberOdd}`); */

// Exercício 08
/* let names: string[] = [];
let average: number[] = [];

for (let i = 0; i < 5; i++) {
  names[i] = prompt(`Digite o nome`);
  average[i] = Number(prompt(`Digite a média`));
  if (average[i] >= 6) {
    console.log(names[i]);
  }
} */

// Exercício 09
/* let names: string[] = [];
let numberPhone: number[] = [];
let city: string[] = [];

for (let i = 0; i < 2; i++) {
  names[i] = prompt(`Digite o nome`);
  numberPhone[i] = Number(prompt(`Digite o telefone`));
  city[i] = prompt(`Digite a cidade`);
  if (city[i] == 'Niterói') {
    console.log(`${names[i]} - ${numberPhone}`);
  }
} */

// Exercício 10
/* let names: string[] = [];
let average: number[] = [];

for (let i = 0; i < 5; i++) {
  names[i] = prompt(`Digite o nome`);
  let inputAverage = Number(prompt(`Digite a média`));

  if (inputAverage >= 0 && inputAverage <= 10) {
    average[i] = inputAverage;
  } else {
    average[i] = 0;
    console.log('Número inválido!')
  }
}
console.log(average); */
