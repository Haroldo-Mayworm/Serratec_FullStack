// Exercício 01
/* let matriz: number[][] = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9], 
    [10, 11, 12]
];

for (let line = 0; line <= 3; line++) {
    for (let column = 0; column <= 2; column++) {
        console.log(matriz[line][column]);
    }
} */

// Exercício 02
/* let lineUserMatriz: number = Number(prompt("Digite o número da linha: "));

let matriz: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matriz[lineUserMatriz]); */

// Exercício 03
/* let matriz = [];

for (let line = 0; line <= 3; line++) {
  matriz[line] = [];
  for (let column = 0; column <= 3; column++) {
    matriz[line][column] = Number(prompt(`Digite o valor para a posição [${line + 1}][${column + 1}]:`));
  }
}

let somasLinhas = new Array(4).fill(0);
let somasColunas = new Array(4).fill(0);

for (let line = 0; line <= 3; line++) {
  for (let column = 0; column <= 3; column++) {
    somasLinhas[line] += matriz[line][column];
    somasColunas[column] += matriz[line][column];
  }
}

console.log("Somas das Linhas:");
for (let line = 0; line <= 3; line++) {
  console.log(`Linha ${line + 1}: ${somasLinhas[line]}`);
}

console.log("Somas das Colunas:");
for (let column = 0; column <= 3; column++) {
  console.log(`Coluna ${column + 1}: ${somasColunas[column]}`);
} */

// Exercício 04
/* let matrizUm: number[][] = [
  [1, 2,3],
  [3, 10,3]
];
let matrizDois: number[][] = [
  [1, 2],
  [3, 5]
];

let somaUm: number = 0;
let somaDois: number = 0;
for (let line = 0; line < matrizUm.length; line++) {
  for (let column = 0; column < matrizUm[line].length; column++) {
    somaUm += matrizUm[line][column];
    somaDois += matrizDois[line][column];
  }
}

if (somaUm > somaDois) {
    console.table('A matriz um é maior');
} else if (somaUm < somaDois) {
    console.log('A matriz dois é maior');
} else {
    console.log('As duas matrizes são iguais');
} */

// Exercício 05

let matriz = [
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
];

/* let matriz = [];

for (let line = 0; line <= 3; line++) {
  matriz[line] = [];
  for (let column = 0; column <= 3; column++) {
    matriz[line][column] = Number(prompt(`Digite o valor para a posição [${line + 1}][${column + 1}]:`));
  }
}  */

console.log("a) Todos os elementos da matriz:");
for (let line = 0; line <= 3; line++) {
  for (let column = 0; column <= 3; column++) {
    console.log(matriz[line][column]);
  }
}

let somaQuadradosPrimeiraColuna = 0;
for (let line = 0; line <= 3; line++) {
  somaQuadradosPrimeiraColuna += Math.pow(matriz[line][0], 2);
}
console.log(`b) Soma dos quadrados da primeira coluna: ${somaQuadradosPrimeiraColuna}`);

let somaTerceiraLinha = matriz[2].reduce((a, b) => a + b, 0);
console.log(`c) Soma da terceira linha: ${somaTerceiraLinha}`);

let somaDiagonalPrincipal = 0;
for (let line = 0; line <= 3; line++) {
  somaDiagonalPrincipal += matriz[line][line];
}
console.log(`d) Soma da diagonal principal: ${somaDiagonalPrincipal}`);

let somaElementosIndiceParSegundaLinha = 0;
for (let column = 0; column <= 3; column += 2) {
  somaElementosIndiceParSegundaLinha += matriz[1][column];
}
console.log(`e) Soma dos elementos de índice par da segunda linha: ${somaElementosIndiceParSegundaLinha}`);