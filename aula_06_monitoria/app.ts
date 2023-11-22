/* function calculo(numero: number): number {
  if (numero == 1) {
    return 1;
  } else {
    return numero + calculo(numero - 1);
  }
} */

/* function calculoInteiro(numero: number): number {
  if (numero % 1 != 0) {
    return 1;
  } else {
    console.log(numero)
    return calculoInteiro(numero - (numero * 0.5));
  }
} */

/* function continuar() {
  const continuar = confirm(`Deseja realizar outra operação?`);
  if (continuar == true) {
    operacaoMatematica();
  } else {
    console.log(`Função finalizada!`);
  }
}

function operacaoMatematica() {
  const escolhaFuncao = Number(
    prompt(`Escolha uma das funções: 
  \n 1 - Somar dois números 
  \n 2 - Retornar o maior de dois números 
  \n 3 - Retornar o maior e o menor de tres números
  \n 4 - Verificar se um número é par ou impar`)
  );
  if (escolhaFuncao == 1) {
    const entradaNumeroUm: number = Number(prompt("Digite o primeiro número: "));
    const entradaNumeroDois: number = Number(prompt("Digite o segundo número: "));
    function somar(x: number, y: number): void {
      if (!x || !y) {
        console.log("Digite um número válido!");
      } else {
        let total = x + y;
        console.log(total);
      }
    }
    somar(entradaNumeroUm, entradaNumeroDois);
    continuar();
  } else if (escolhaFuncao == 2) {
    const entradaNumeroUm: number = Number(prompt("Digite o primeiro número: "));
    const entradaNumeroDois: number = Number(prompt("Digite o segundo número: "));

    function numMaior(numUm: number, numDois: number): void {
      if (!numUm || !numDois) {
        console.log("Digite um número válido!");
      } else {
        let numMaior = Math.max(numUm, numDois);
        console.log(numMaior);
      }
    }
    numMaior(entradaNumeroUm, entradaNumeroDois);
    continuar();
  } else if (escolhaFuncao == 3) {
    const entradaNumeroUm: number = Number(prompt("Digite o primeiro número: "));
    const entradaNumeroDois: number = Number(prompt("Digite o segundo número: "));
    const entradaNumeroTres: number = Number(prompt("Digite o terceiro número: "));

    function maiorMenor(numUm: number, numDois: number, numTres: number): void {
      if (!numUm || !numDois || !numTres) {
        console.log("Digite um número válido!");
      } else {
        let numMaior = Math.max(numUm, numDois, numTres);
        let numMenor = Math.min(numUm, numDois, numTres);
        console.log(`Número maior: ${numMaior} \nNúmero menor: ${numMenor}`);
      }
    }
    maiorMenor(entradaNumeroUm, entradaNumeroDois, entradaNumeroTres);
    continuar();
  } else if (escolhaFuncao == 4) {
    const entradaNumeroUm: number = Number(prompt("Digite um número: "));

    function parImpar(numero: number): void {
      if (!numero) {
        console.log("Digite um número válido!");
      } else {
        let modulo: number = numero % 2;
        if (modulo == 0) {
          console.log(`${numero} é um número par!`);
        } else {
          console.log(`${numero} é um número impar!`);
        }
      }
    }
    parImpar(entradaNumeroUm);
    continuar();
  }
}
 */

function mudarTexto(i) {
  let texto = document.getElementById("mudar");
  texto.innerHTML = `Seja bem vindo ${i}`;
}

function continuar() {
  const continuar = confirm(`Deseja realizar outra operação?`);
  if (continuar == true) {
    operacaoMatematica();
  } else {
    console.log(`Função finalizada!`);
  }
}

function operacaoMatematica() {
  const escolhaFuncao = Number(
    prompt(`Escolha uma das funções: 
  \n 1 - Somar dois números 
  \n 2 - Retornar o maior de dois números 
  \n 3 - Retornar o maior e o menor de tres números
  \n 4 - Verificar se um número é par ou impar`)
  );
  if (escolhaFuncao == 1) {
    const entradaNumeroUm: number = Number(document.querySelector("#numeroUm"));
    const entradaNumeroDois: number = Number(document.querySelector("#numeroDois"));
    function somar(numUm: number, numDois: number): void {
      if (!numUm || !numDois) {
        console.log("Digite um número válido!");
      } else {
        
      }
    }
    somar(entradaNumeroUm, entradaNumeroDois);
    continuar();
  } else if (escolhaFuncao == 2) {
    const entradaNumeroUm: number = Number(prompt("Digite o primeiro número: "));
    const entradaNumeroDois: number = Number(prompt("Digite o segundo número: "));

    function numMaior(numUm: number, numDois: number): void {
      if (!numUm || !numDois) {
        console.log("Digite um número válido!");
      } else {
        let numMaior = Math.max(numUm, numDois);
        console.log(numMaior);
      }
    }
    numMaior(entradaNumeroUm, entradaNumeroDois);
    continuar();
  } else if (escolhaFuncao == 3) {
    const entradaNumeroUm: number = Number(prompt("Digite o primeiro número: "));
    const entradaNumeroDois: number = Number(prompt("Digite o segundo número: "));
    const entradaNumeroTres: number = Number(prompt("Digite o terceiro número: "));

    function maiorMenor(numUm: number, numDois: number, numTres: number): void {
      if (!numUm || !numDois || !numTres) {
        console.log("Digite um número válido!");
      } else {
        let numMaior = Math.max(numUm, numDois, numTres);
        let numMenor = Math.min(numUm, numDois, numTres);
        console.log(`Número maior: ${numMaior} \nNúmero menor: ${numMenor}`);
      }
    }
    maiorMenor(entradaNumeroUm, entradaNumeroDois, entradaNumeroTres);
    continuar();
  } else if (escolhaFuncao == 4) {
    const entradaNumeroUm: number = Number(prompt("Digite um número: "));

    function parImpar(numero: number): void {
      if (!numero) {
        console.log("Digite um número válido!");
      } else {
        let modulo: number = numero % 2;
        if (modulo == 0) {
          console.log(`${numero} é um número par!`);
        } else {
          console.log(`${numero} é um número impar!`);
        }
      }
    }
    parImpar(entradaNumeroUm);
    continuar();
  }
}
