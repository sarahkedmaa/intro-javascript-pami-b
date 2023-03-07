let entrada = require('prompt-sync')();
let n, n2, n3;

n = entrada('Digite o primeiro valor: ');
n1 = parseInt(n);
n = entrada('Digite o segundo valor: ');
n2 = parseInt(n);

let soma, sub, mult, div, resto;

soma = n1 + n2;
sub = n1 - n2;
mult = n1 * n2;
div = n1 / n2;
resto = n1 % n2;

console.log(n1 + ' + '  + n2 + ' = ' + soma);
console.log(n1 + ' - '  + n2 + ' = ' + sub);
console.log(n1 + ' * '  + n2 + ' = ' + mult);
console.log(n1 + ' / '  + n2 + ' = ' + div);
console.log(n1 + ' % '  + n2 + ' = ' + resto);
console.log(n1 + ' / '  + n2 + ' = ' + parseInt(div) + ' (Inteiro da divisão) ');