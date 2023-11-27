// 1 - Escreva um loop que retorne os números de 10 -> 0.
/* for (let i = 10; i >= 0; i--) {
  console.log(`Número - ${i}`);
} */
// 2 - Escreva um loop que retorne a tabuada de 5.
/* let i = 1;

while (i <= 10) {
  let result = `${i} x 5 = ${i * 5}`;
  console.log(result);
  i++;
} */
// 3 - Escreva um loop que recebe um número e retorna do número recebido até 0.
/* let inputNumber: number = Number(prompt('Digite um número: '));

while (inputNumber >= 0) {
  console.log(inputNumber);
  inputNumber--;
} */
// 4 - 
var entradaDado = Number(prompt('Digite um número: '));
var i = 1;
while (i <= 10) {
    var result = "".concat(i, " x ").concat(entradaDado, " = ").concat(i * entradaDado);
    console.log(result);
    i++;
}
// let elementoMudar = document.getElementById('mudar');
// console.log(elementoMudar);
// if (elementoMudar) {
//     elementoMudar.textContent = 'mudou!!!';
// } else {
//     console.error('Elemento não encontrado com id "mudar".');
// }
// console.log('000');
// const entradaNome= prompt("Digite seu nome: ");
// let texto = document.getElementById("mudar");
// texto.innerHTML = `Seja bem vindo ${entradaNome}`;
/* function mudarTexto(i) {
  let texto = document.getElementById("mudar");
  texto.innerHTML = `Seja bem vindo ${i}`;
}

mudarTexto(entradaNome); */
