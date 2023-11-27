// 1
/* function increaseOne(x) {
    x++;
    return x;
}

let a: number = 0;
let b: number = 5;

for(let i = 0; i <= 3; i++) {
    b = a - i;
    a = increaseOne(b);
    console.log(a);
    console.log(b);
} */
// 2
/* function increaseOne(x) {
    x++;
    return x;
}
function deincreaseOne(x) {
    x--;
    return x;
}

let a: number = 10;
let b: number = 2;

while (a > 5) {
    a = a - 4;

    if (b > 0) {
        b = deincreaseOne(b);
    }
    a = increaseOne(a);
} */
// 3
/* const inputNumberOne: number = Number(prompt('Digite o primeiro número: '));
const inputNumberTwo: number = Number(prompt('Digite o segundo número: '));

function sum(x: number, y: number): void {
  if (!x || !y) {
    console.log('Digite um número válido!');
  } else {
    let total = x + y;
    console.log(total);
  }
}
sum(inputNumberOne, inputNumberTwo); */
// 4
/* const inputNumberOne: number = Number(prompt('Digite o primeiro número: '));
const inputNumberTwo: number = Number(prompt('Digite o segundo número: '));

function higherNumber(x: number, y: number): void {
  if (!x || !y) {
    console.log('Digite um número válido!');
  } else {
    let finalNumber = Math.max(x, y);
    console.log(finalNumber);
  }
}
higherNumber(inputNumberOne, inputNumberTwo); */
// 5
/* const inputNumberOne: number = Number(prompt('Digite o primeiro número: '));
const inputNumberTwo: number = Number(prompt('Digite o segundo número: '));
const inputNumberThree: number = Number(prompt('Digite o terceiro número: '));

function higherNumber(x: number, y: number, z: number): void {
  if (!x || !y) {
    console.log('Digite um número válido!');
  } else {
    let maxNumber = Math.max(x, y, z);
    let minNumber = Math.min(x, y, z);
    console.log(`Número maior: ${maxNumber} \nNúmero menor: ${minNumber}`);
  }
}
higherNumber(inputNumberOne, inputNumberTwo, inputNumberThree); */
// 6
/* const inputNumber: number = Number(prompt('Digite um número: '));

function evenOdd(x: number): void {
  if (!x) {
    console.log('Digite um número válido!');
  } else {
    let modulo: number = x % 2;
    if (modulo == 0) {
      console.log(`${x} é um número par!`);
    } else {
      console.log(`${x} é um número impar!`);
    }
  }
}
evenOdd(inputNumber); */
// 7
/* const inputNumber: number = Number(prompt('Digite um número de 1 - 10: '));

function isValid(x: number): void {
  if (x < 0 || x > 10) {
    console.log(`${x} não é um número válido, \nDigite outro número!`);
  } else {
    console.log(`${x} é um número válido!`);
  }
}
isValid(inputNumber); */
// Desafio lógico
var athleteEnergy = 5;
var numberPushUpsLap = 3;
var lap = 0;
while (athleteEnergy > 0) {
    console.log("Energia: ".concat(athleteEnergy));
    console.log("Atleta correndo uma volta");
    for (var i = 0; i < numberPushUpsLap || athleteEnergy == 0; i++) {
        console.log("Atleta fazendo flex\u00E3o");
        athleteEnergy--;
        if (athleteEnergy == 0) {
            console.log("A energia acabou, o atleta n\u00E3o pode continuar");
            break;
        }
    }
    athleteEnergy--;
    lap++;
    if (athleteEnergy >= 0) {
        console.log("O atleta completou a volta ".concat(lap));
    }
    else {
        console.log("O atleta n\u00E3o completou a volta ".concat(lap));
    }
    if (athleteEnergy == 0) {
        console.log("A energia acabou, o atleta n\u00E3o pode continuar");
        break;
    }
}
console.log("O atleta terminou a corrida");
