// Switch
/* switch (4 - 3) {
  case 1:
    console.log('Condição 1');
    break;
  case 2:
    console.log('Condição 2');
    break;
  default:
    console.log('Não atendeu');
    break;
} */
// Operador ternário
/* const inputAge: number = Number(prompt('Digite sua idade: '));
const age = inputAge >= 18 ? 'Pessoa maior de idade' : 'Pessoa menor de idade';
console.log(age); */
// Ifs
/* const studentGrade: number = Number(prompt('Digite a nota do aluno: '));

if (studentGrade > 10 || studentGrade < 0 || !studentGrade) {
  console.log('Nota inválida');
} else if (studentGrade >= 0 && studentGrade < 4) {
  console.log('Aluno reprovado');
} else if (studentGrade >= 4 && studentGrade < 7) {
  let recoveryGrade: number = Number(prompt('Digite a nota da recuperação'));
  let average = (studentGrade + recoveryGrade) / 2;
  if (average >= 7) {
    console.log('Aprovado na recuperação');
  } else {
    console.log('Reprovado na recuperação');
  }
} else if (studentGrade >= 7 && studentGrade <= 10) {
  console.log('Aluno aprovado');
} */
// Switch
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
/* let inputData: string | null = prompt('Digite o conceito');
inputData = inputData ? inputData.toUpperCase() : null;

switch (inputData) {
  case 'A':
    console.log('Atendido');
    break;
  case 'PA':
    console.log('parcialmente atendido');
    break;
  case 'NA':
    console.log('Não atendido');
} */
// Datas
/* const inputNumber = Number(prompt('Digite um número entre 1 - 12: '));

let month: string | null = new Date(2023, inputNumber - 1, 1).toLocaleString('pt-BR', { month: 'long' });
month = month ? month.toUpperCase() : null;

if (inputNumber >= 1 && inputNumber <= 12) {
  console.log(month);
} else {
  console.log('Data Inválida');
} */ 
