switch (4 - 3) {
    case 1:
        console.log('Condição 1');
        break;
    case 2:
        console.log('Condição 2');
        break;
    default:
        console.log('Não atendeu');
        break;
}
var entradaIdade = Number(prompt('Digite sua Idade: '));
var idade = entradaIdade >= 18 ? 'Pessoa maior de idade' : "Pessoa menor de idade";
console.log(idade);
