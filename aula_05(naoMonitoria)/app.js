// 01
/* for (let i = 10; i >= 0; i--) {
  console.log(`Número - ${i}`)
}; */
// 02
/* let i = 1;=

while (i <= 10) {
  let resultado = `${i} x 5 = ${i * 5}`;
  console.log(resultado);
  i++;
} */
// 03
/* let i = Number(prompt('Digite um número: '));

while (i >= 0) {
  console.log(i);
  i--;
} */
// 04
/* let entradaDado = Number(prompt('Digite um número: '));
let i = 1;

while (i <= 10) {
  let resultado = `${i} x ${entradaDado} = ${i * entradaDado}`;
  console.log(resultado);
  i++;
} */
// let elementoMudar = document.getElementById('mudar');
// console.log(elementoMudar);
// if (elementoMudar) {
//     elementoMudar.textContent = 'mudou!!!';
// } else {
//     console.error('Elemento não encontrado com id "mudar".');
// }
var entradaNome = prompt("Digite seu nome: ");
function mudarTexto(i) {
    var texto = document.getElementById("mudar");
    texto.innerHTML = "Seja bem vindo ".concat(i);
}
mudarTexto(entradaNome);
