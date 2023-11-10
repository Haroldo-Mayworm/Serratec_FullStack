/*/ Exercício 1

const porcentagemAumento:number = 1
let aumento:number = 0

let valorComAumento:number = 0
const entradaValor = prompt("Informe valor para calculo de aumento: ")
if(entradaValor !== null ){ 

    const valor:number = parseFloat(entradaValor)

aumento = valor * porcentagemAumento
 
valorComAumento = valor + aumento
console.log(`O valor informado original é : ${valor}`)
console.log(`O valor do aumento é: ${aumento}`)
console.log(`O valor final com o aumento é: ${valorComAumento}`)
}
*/

/*/ Exercício 2

  
const entradaValorProduto = prompt("Informe o valor do produto: ")
const percentualRevenda = 0.5
let valorAumento = 0
let valorFinalProduto = 0

if(entradaValorProduto !== null){

let valorProduto = parseFloat(entradaValorProduto);
valorAumento = valorProduto * percentualRevenda
valorFinalProduto = valorProduto + valorAumento



console.log(`Valor original do produto: ${valorProduto}`)
console.log(`Valor do aumento do produto: ${valorAumento} `)
console.log(`Valor final do produto:  ${valorFinalProduto}`)



}*/


/*/ Exercicio 3

const entradaValorInvestimento = prompt("Digite o valor para ser investido: ")
const percentualAumentoInvestimento = 0.3 
if(entradaValorInvestimento != null){

let valorInvestimento = parseFloat(entradaValorInvestimento)

let aumentoInvestimento = valorInvestimento * percentualAumentoInvestimento

let valorFinalInvestimento = aumentoInvestimento + valorInvestimento

console.log(`Valor do investimento é de : ${entradaValorInvestimento}`)
console.log(`Valor do retorno do investimento é de  ${aumentoInvestimento} `)
console.log(`Valor final com o retorno de investimento é de :  ${valorFinalInvestimento}`)


}
*/

/*/ Exercicio 4



const percentualAumentoSalario:number = 0.07
let aumentoSalario:number = 0

let salarioComAumento:number = 0
const entradaSalario   = prompt("Informe valor do salário para reajuste: ")
if(entradaSalario !== null ){ 

    let salario:number = parseFloat(entradaSalario)

    aumentoSalario = salario * percentualAumentoSalario
 
    salarioComAumento = salario + aumentoSalario
console.log(`O valor original do salário  é : ${salario}`)
console.log(`O valor do aumento do salário é: ${aumentoSalario}`)
console.log(`O valor final do salário é: ${salarioComAumento}`)
}
*/

/*/ Exercício 5

const entradaValorProduto = prompt("Informe o valor do produto: ")
const percentualDesconto = 0.07
let valorDesconto = 0
let valorFinalProduto = 0

if(entradaValorProduto !== null){

let valorProduto = parseFloat(entradaValorProduto);
valorDesconto = valorProduto * percentualDesconto
valorFinalProduto = valorProduto - valorDesconto



console.log(`Valor original do produto: ${valorProduto}`)
console.log(`Valor do desconto do produto: ${valorDesconto.toFixed(2)} `)
console.log(`Valor final do produto:  ${valorFinalProduto}`)



}*/

// Exercício 6

const percentualDescontoTransporte: number = 0.06
const percentualDescontoInss: number = 0.08
let totalDescontos = 0
let salarioLiquido: number = 0

let salarioComAumento: number = 0
const entradaSalario = prompt("Informe valor do salário para calculo de impostos: ")
if (entradaSalario !== null) {

    let salario: number = parseFloat(entradaSalario)

    let descontoValeTransporte = salario * percentualDescontoTransporte

    let descontoInss = salario * percentualDescontoInss

    totalDescontos = descontoValeTransporte + descontoInss

    salarioLiquido = salario - totalDescontos



    console.log(`O valor original do salário  é : ${salario}`)
    console.log(`O valor do desconto do vale transporte é: ${descontoValeTransporte}`)
    console.log(`O valor do desconto do INSS é: ${descontoInss}`)
    console.log(`O valor total dos descontos são:  ${totalDescontos}`)
   console.log(`O valor do salário liquido é de: ${salarioLiquido}`)
}