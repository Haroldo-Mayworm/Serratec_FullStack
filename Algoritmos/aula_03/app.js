// 1 - Escreva um algoritmo que recebe um salario e se for maior que 3000 oferece o plano Alfa e se for igual ou menor, oferece o plano beta.
/* const salaryClient: number = Number(prompt('Digite o salário do cliente: '));

if (salaryClient > 3000 && !null) {
  console.log('Oferecer plano Alfa');
} else {
  console.log('Oferecer plano beta');
} */
/* // 2 - Escreva um algoritmo que recebe o colesterol e retorna se está ok.
const colesterol: number = Number(prompt('Digite o seu colesterol: '));

if (colesterol < 180 && !null) {
  console.log('Saúde OK');
} else {
  console.log('Vamos procurar uma ajuda médica?');
} */
// 3 - Escreva um algoritmo que recebe o valor de vendas
/* const sales: number = Number(prompt('Total de vendas no mês: '));

if (sales >= 100000 && !null) {
  let comissao: number = sales * 0.04;
  console.log(`Sua comissão é de ${comissao}, logo você receberá ${sales + comissao}`);
} else {
  let comissao: number = sales * 0.02;
  console.log(`Sua comissão é de ${comissao}, logo você receberá ${sales + comissao}`);
} */
// 4 - Escreva um algoritmo que recebe a nota de um aluno e retorna a situação do aluno.
var studentGrade = Number(prompt('Digite a nota do aluno: '));
if (studentGrade > 10 || studentGrade < 0 || !studentGrade) {
    console.log('Nota inválida');
}
else if (studentGrade >= 0 && studentGrade < 4) {
    console.log('Aluno reprovado');
}
else if (studentGrade >= 4 && studentGrade < 7) {
    console.log('Aluno em recuperação');
}
else if (studentGrade > 7 && studentGrade <= 10) {
    console.log('Aluno aprovado');
}
