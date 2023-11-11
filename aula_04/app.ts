/* const salaryClient: number = Number(prompt('Digite o salário do cliente: '));

if (salaryClient > 3000 && !null) {
  console.log('Oferecer plano Alfa');
} else {
  console.log('Oferecer plano beta');
} */

/* const colesterol: number = Number(prompt('Digite o seu colesterol: '));

if (colesterol < 180 && !null) {
  console.log('Saúde OK');
} else {
  console.log('Vamos procurar uma ajuda médica?');
} */

/* const sales: number = Number(prompt("Total de vendas no mês: "));

if (sales >= 100000 && !null) {
  let comissaoA: number = sales * 0.04;
  console.log(`Sua comissão é de ${comissaoA}, logo você receberá ${sales + comissaoA}`);
} else {
  let comissaoB: number = sales * 0.02;
  console.log(`Sua comissão é de ${comissaoB}, logo você receberá ${sales + comissaoB}`);
} */

const notaAluno: number = Number(prompt("Digite a nota do aluno: "));
const entradaNotaAluno: string | null = prompt("Digite a nota do aluno: ");

if (notaAluno > 10 || notaAluno < 0 || !notaAluno) {
  console.log("Nota inválida");
} else if (notaAluno >= 0 && notaAluno < 4) {
  console.log("Aluno reprovado");
} else if (notaAluno >= 4 && notaAluno < 7) {
  console.log("Aluno em recuperação");
} else if (notaAluno > 7 && notaAluno <= 10) {
  console.log("Aluno aprovado");
}
