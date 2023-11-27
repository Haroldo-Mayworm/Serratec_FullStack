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
/* let numeros: number[] = [];

for (let i = 0; i < 8; i++) {
  numeros[i] = Number(prompt(`Digite um número`));
}

let numeroMaior = Math.max(...numeros);
let numeroMenor = Math.min(...numeros);

console.log(`Número maior: ${numeroMaior} \nNúmero Menor: ${numeroMenor}`); */
// Exercício 06
/* let numeros: number[] = [];
let maiorDez: number = 0;

for (let i = 0; i < 10; i++) {
  numeros[i] = Number(prompt(`Digite um número`));
  if (numeros[i] > 10) {
    maiorDez++;
  }
}

console.log(`${maiorDez} números digitados são maiores que 10!`); */
// Exercício 07
/* let numeros: number[] = [];
let numeroPar: number = 0;
let numeroImpar: number = 0;

for (let i = 0; i < 7; i++) {
  numeros[i] = Number(prompt(`Digite um número`));
  if (numeros[i] % 2 == 0) {
    numeroPar++;
  } else {
    numeroImpar++;
  }
}
console.log(`Números pares: ${numeroPar} \nNúmeros impares: ${numeroImpar}`); */
// Exercício 08
/* let nome: string[] = [];
let media: number[] = [];

for (let i = 0; i < 5; i++) {
  nome[i] = prompt(`Digite o nome`);
  media[i] = Number(prompt(`Digite a média`));
  if (media[i] >= 6) {
    console.log(nome[i]);
  }
}*/
// Exercício 09
/* let nome: string[] = [];
let telefone: number[] = [];
let cidade: string[] = [];

for (let i = 0; i < 2; i++) {
  nome[i] = prompt(`Digite o nome`);
  telefone[i] = Number(prompt(`Digite o telefone`));
  cidade[i] = prompt(`Digite a cidade`);
  if (cidade[i] == "Niterói") {
    console.log(`${nome[i]} - ${telefone}`);
  }
} */
// Exercício 10
/* let nome: string[] = [];
let media: number[] = [];

for (let i = 0; i < 5; i++) {
  nome[i] = prompt(`Digite o nome`);
  let entradaMedia = Number(prompt(`Digite a média`));

  if (entradaMedia >= 0 && entradaMedia <= 10) {
    media[i] = entradaMedia;
  } else {
    media[i] = 0;
    console.log('Número inválido!')
  }
}
console.log(media); */
