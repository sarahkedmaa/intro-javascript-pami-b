let entrada = require('prompt-sync')();

let n1 = entrada('Digite sua primeira nota: ');
let n2 = entrada('Digite sua segunda nota: ');

let media;

media = ((parseFloat(n1) + parseFloat(n2))/2);

if (media < 5){
    console.log('A sua nota é I');
}

if (media >= 5 && media < 6.5){
    console.log('A sua nota é R');
}

if (media >= 6.5 && media < 8.5){
    console.log('A sua nota é B');
}

if (media >= 8.5){
    console.log('A sua nota é MB');
}

console.log('')
console.log('Fim do programa')
entrada()