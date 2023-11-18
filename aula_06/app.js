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
var energiaAtleta = 5;
var flexaoVolta = 3;
var volta = 0;
while (energiaAtleta > 0) {
    console.log("Energia: ".concat(energiaAtleta));
    console.log("Atleta correndo uma volta");
    for (var i = 0; i < flexaoVolta || energiaAtleta == 0; i++) {
        console.log("Atleta fazendo flex\u00E3o");
        energiaAtleta--;
        if (energiaAtleta == 0) {
            console.log("A energia acabou, o atleta n\u00E3o pode continuar");
            break;
        }
    }
    energiaAtleta--;
    volta++;
    if (energiaAtleta >= 0) {
        console.log("O atleta completo a volta ".concat(volta));
    }
    else {
        console.log("O atleta n\u00E3o completo a volta ".concat(volta));
    }
    if (energiaAtleta == 0) {
        console.log("A energia acabou, o atleta n\u00E3o pode continuar");
        break;
    }
}
console.log("O atleta terminou a corrida");
