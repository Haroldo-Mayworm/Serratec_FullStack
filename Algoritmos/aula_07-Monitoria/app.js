// Função recursiva
/* function calculus(numero: number): number {
  if (numero == 1) {
    return 1;
  } else {
    return numero + calculus(numero - 1);
  }
} */
/* function calculusInt(numero: number): number {
  if (numero % 1 != 0) {
    return 1;
  } else {
    console.log(numero);
    return calculusInt(numero - (numero * 0.5));
  }
} */
/* function continueConfirmation() {
  const continuar = confirm(`Deseja realizar outra operação?`);
  if (continuar == true) {
    mathematicalOperation();
  } else {
    console.log(`Função finalizada!`);
  }
}

function mathematicalOperation() {
  const selectFunction = Number(
    prompt(`Escolha uma das funções:
  \n 1 - Somar dois números
  \n 2 - Retornar o maior de dois números
  \n 3 - Retornar o maior e o menor de tres números
  \n 4 - Verificar se um número é par ou impar`)
  );
  if (selectFunction == 1) {
    const inputNumberOne: number = Number(prompt('Digite o primeiro número: '));
    const inputNumberTwo: number = Number(prompt('Digite o segundo número: '));
    function sum(x: number, y: number): void {
      if (!x || !y) {
        console.log('Digite um número válido!');
      } else {
        let total = x + y;
        console.log(total);
      }
    }
    sum(inputNumberOne, inputNumberTwo);
    continueConfirmation();
  } else if (selectFunction == 2) {
    const inputNumberOne: number = Number(prompt('Digite o primeiro número: '));
    const inputNumberTwo: number = Number(prompt('Digite o segundo número: '));

    function biggerNumber(numUm: number, numDois: number): void {
      if (!numUm || !numDois) {
        console.log('Digite um número válido!');
      } else {
        let biggerNumber = Math.max(numUm, numDois);
        console.log(biggerNumber);
      }
    }
    biggerNumber(inputNumberOne, inputNumberTwo);
    continueConfirmation();
  } else if (selectFunction == 3) {
    const inputNumberOne: number = Number(prompt('Digite o primeiro número: '));
    const inputNumberTwo: number = Number(prompt('Digite o segundo número: '));
    const inputNumberThree: number = Number(prompt('Digite o terceiro número: '));

    function biggerSmaller(numUm: number, numDois: number, numTres: number): void {
      if (!numUm || !numDois || !numTres) {
        console.log('Digite um número válido!');
      } else {
        let biggerNumber = Math.max(numUm, numDois, numTres);
        let smallerNumber = Math.min(numUm, numDois, numTres);
        console.log(`Número maior: ${biggerNumber} \nNúmero menor: ${smallerNumber}`);
      }
    }
    biggerSmaller(inputNumberOne, inputNumberTwo, inputNumberThree);
    continueConfirmation();
  } else if (selectFunction == 4) {
    const inputNumberOne: number = Number(prompt('Digite um número: '));

    function evenOdd(numero: number): void {
      if (!numero) {
        console.log('Digite um número válido!');
      } else {
        let modulo: number = numero % 2;
        if (modulo == 0) {
          console.log(`${numero} é um número par!`);
        } else {
          console.log(`${numero} é um número impar!`);
        }
      }
    }
    evenOdd(inputNumberOne);
    continueConfirmation();
  }
} */
/* function changeText(i) {
  let text = document.getElementById('mudar');
  text.innerHTML = `Seja bem vindo ${i}`;
}

function continueConfirmation() {
  const continuar = confirm(`Deseja realizar outra operação?`);
  if (continuar == true) {
    mathematicalOperation();
  } else {
    console.log(`Função finalizada!`);
  }
}

function mathematicalOperation() {
  const selectFunction = Number(
    prompt(`Escolha uma das funções:
  \n 1 - Somar dois números
  \n 2 - Retornar o maior de dois números
  \n 3 - Retornar o maior e o menor de tres números
  \n 4 - Verificar se um número é par ou impar`)
  );
  if (selectFunction == 1) {
    const inputNumberOne: number = Number(document.querySelector('#numeroUm'));
    const inputNumberTwo: number = Number(document.querySelector('#numeroDois'));
    function sum(numUm: number, numDois: number): void {
      if (!numUm || !numDois) {
        console.log('Digite um número válido!');
      } else {
      }
    }
    sum(inputNumberOne, inputNumberTwo);
    continueConfirmation();
  } else if (selectFunction == 2) {
    const inputNumberOne: number = Number(prompt('Digite o primeiro número: '));
    const inputNumberTwo: number = Number(prompt('Digite o segundo número: '));

    function biggerNumber(numUm: number, numDois: number): void {
      if (!numUm || !numDois) {
        console.log('Digite um número válido!');
      } else {
        let biggerNumber = Math.max(numUm, numDois);
        console.log(biggerNumber);
      }
    }
    biggerNumber(inputNumberOne, inputNumberTwo);
    continueConfirmation();
  } else if (selectFunction == 3) {
    const inputNumberOne: number = Number(prompt('Digite o primeiro número: '));
    const inputNumberTwo: number = Number(prompt('Digite o segundo número: '));
    const inputNumberThree: number = Number(prompt('Digite o terceiro número: '));

    function biggerSmaller(numUm: number, numDois: number, numTres: number): void {
      if (!numUm || !numDois || !numTres) {
        console.log('Digite um número válido!');
      } else {
        let biggerNumber = Math.max(numUm, numDois, numTres);
        let smallerNumber = Math.min(numUm, numDois, numTres);
        console.log(`Número maior: ${biggerNumber} \nNúmero menor: ${smallerNumber}`);
      }
    }
    biggerSmaller(inputNumberOne, inputNumberTwo, inputNumberThree);
    continueConfirmation();
  } else if (selectFunction == 4) {
    const inputNumberOne: number = Number(prompt('Digite um número: '));

    function evenOdd(numero: number): void {
      if (!numero) {
        console.log('Digite um número válido!');
      } else {
        let modulo: number = numero % 2;
        if (modulo == 0) {
          console.log(`${numero} é um número par!`);
        } else {
          console.log(`${numero} é um número impar!`);
        }
      }
    }
    evenOdd(inputNumberOne);
    continueConfirmation();
  }
}
 */ 
