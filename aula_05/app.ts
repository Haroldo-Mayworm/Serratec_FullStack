/* switch (4 - 3) {
  case 1:
    console.log('Condição 1');
  break;
  case 2:
    console.log('Condição 2')
  break;
  default:
    console.log('Não atendeu')
  break;
} */

/* const entradaIdade: number = Number(prompt('Digite sua Idade: '));
const idade = entradaIdade >= 18 ? 'Pessoa maior de idade' : 'Pessoa menor de idade';
console.log(idade); */

/* let i = 0;
while (i <= 10) {
  let TabuadaCinco = 5 * i;
  console.log(`${i} x 5 = ${TabuadaCinco}`);
  i++;
} */

/* const notaAluno: number = Number(prompt('Digite a nota do aluno: '));

if (notaAluno > 10 || notaAluno < 0 || !notaAluno) {
    console.log('Nota inválida');
} else if (notaAluno >= 0 && notaAluno < 4) {
    console.log('Aluno reprovado');
} else if (notaAluno >= 4 && notaAluno < 7) {
    let notaRecuperacao: number = Number(prompt('Digite a nota da recuperação'));
    let media = (notaAluno + notaRecuperacao) / 2;
    if (media >= 7) {
        console.log('Aprovado na recuperação');
    } else {
        console.log('Reprovado na recuperação');
    }
} else if (notaAluno >= 7 && notaAluno <= 10) {
    console.log('Aluno aprovado');
}*/

/* const numberUser: number = Number(prompt('Digite um número entre 1 - 12: '));

switch (numberUser) {
  case 1:
    console.log('Janeiro');
  break;
  case 2:
    console.log('Fevereiro');
  break;
  case 3:
    console.log('Março');
  break;
  case 4:
    console.log('Abril');
  break;
  case 5:
    console.log('Maio');
  break;
  case 6:
    console.log('Junho');
  break;
  case 7:
    console.log('Julho');
  break;
  case 8:
    console.log('Agosto');
  break;
  case 9:
    console.log('Setembro');
  break;
  case 10:
    console.log('Outubro');
  break;
  case 11:
    console.log('Novembro');
  break;
  case 12:
    console.log('Dezembro');
  break;
  default:
    console.log('Data Inválida');
  break;
} */


/* let entradaConceito: string | null = prompt('Digite o conceito');
entradaConceito = entradaConceito ? entradaConceito.toUpperCase() : null;

switch (entradaConceito) {
    case 'A':
        console.log('Atendido');
        break;
    case 'PA':
        console.log('parcialmente atendido');
        break;
    case 'NA':
        console.log('Não atendido');
} */



const numberUser = Number(prompt('Digite um número entre 1 - 12: '));

let nomeDoMes: string | null = new Date(2023, numberUser - 1, 1).toLocaleString('pt-BR', { month: 'long' });
nomeDoMes = nomeDoMes ? nomeDoMes.toUpperCase() : null;

if (numberUser >= 1 && numberUser <= 12) {
  console.log(nomeDoMes);
} else {
  console.log('Data Inválida');
}
