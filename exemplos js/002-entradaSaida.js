let entrada = require('prompt-sync')();

let nome = entrada('Digite seu nome: ');
console.log('Nome digitado: ' +nome);

let n1 = entrada('Digite um número: ');
let n2 = entrada('Digite outro número: ');
let soma = parseInt(n1) + parseInt(n2);
console.log('A soma do nº ' +n1 + ' com o nº ' + n2 + ' é ' + soma);

entrada();
console.log('Fim do programa');
