/* function somar(x) {
    x++;
    return x;
}

let a = 0;
let b = 5;

for(let i = 0; i <= 3; i++) {
    b = a - i;
    a = somar(b);
    console.log(a);
    console.log(b);
} */

/* function somar(x) {
    x++;
    return x;
}
function subt(x) {
    x--;
    return x;
}

let numA = 10;
let numB = 2;

while (numA > 5) {
    numA = numA - 4;
    //console.log(numA);

    if (numB > 0) {
        numB = subt(numB);
    }
    numA = somar(numA);
    //console.log(numA);
    //console.log(numB);
} */

// Exercício 03
/*const num1: number = Number(prompt('Digite o primeiro número: '));
const num2: number = Number(prompt('Digite o segundo número: '));

function somar(x: number, y: number): void {
  if (!x || !y) {
    console.log('Digite um número válido!');
  } else {
    let total = x + y;
    console.log(total);
  }
}
somar(num1, num2);
*/
// Exercício 04
/* const num1: number = Number(prompt('Digite o primeiro número: '));
const num2: number = Number(prompt('Digite o segundo número: '));

function numMaior(x: number, y: number): void {
  if (!x || !y) {
    console.log('Digite um número válido!');
  } else {
    let numMaior = Math.max(x, y);
    console.log(numMaior);
  }
}
numMaior(num1, num2); */

// Exercício 05
/* const num1: number = Number(prompt('Digite o primeiro número: '));
const num2: number = Number(prompt('Digite o segundo número: '));
const num3: number = Number(prompt('Digite o terceiro número: '));

function maiorMenor (x: number, y: number, z: number): void {
    if (!x || !y) {
        console.log('Digite um número válido!');
      } else {
        let numMaior = Math.max(x, y, z);
        let numMenor = Math.min(x, y, z);
        console.log(`Número maior: ${numMaior} \nNúmero menor: ${numMenor}`);
      }
}
maiorMenor(num1, num2, num3); */

// Exercício 06
/* const num1: number = Number(prompt('Digite um número: '));

function parImpar (x: number): void {
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
parImpar(num1);*/

// Exercício 07
/* const num1: number = Number(prompt('Digite um número de 1 - 10: '));

function numValido (x: number): void {
    if (x < 0 || x > 10) {
        console.log(`${x} não é um número válido, \nDigite outro número!`);
      } else {
        console.log(`${x} é um número válido!`);
      }
}
numValido(num1); */

let energiaAtleta: number = 5;
let flexaoVolta: number = 3;
let volta: number = 0;

while (energiaAtleta > 0) {
  console.log(`Energia: ${energiaAtleta}`);
  console.log(`Atleta correndo uma volta`);

  for (let i = 0; i < flexaoVolta || energiaAtleta == 0; i++) {
    console.log(`Atleta fazendo flexão`);
    energiaAtleta--;

    if (energiaAtleta == 0) {
      console.log(`A energia acabou, o atleta não pode continuar`);
      break;
    }
  }
  energiaAtleta--;
  volta++;
  if (energiaAtleta >= 0) {
    console.log(`O atleta completou a volta ${volta}`);
  } else {
    console.log(`O atleta não completou a volta ${volta}`);
  }

  if (energiaAtleta == 0) {
    console.log(`A energia acabou, o atleta não pode continuar`);
    break;
  }
}

console.log(`O atleta terminou a corrida`);
