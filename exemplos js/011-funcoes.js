let entrada = require('prompt-sync')();
//função sem parâmetro e sem retorno
function data (){
    const timeElapsed = Date.now();
    const hoje = new Date(timeElapsed);
    console.log('Hoje é: ' + hoje.toUTCString());
}
//função sem parâmetro e com retorno
function caracterAleatorio(){
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const nAleatorio = Math.floor(Math.random() * (61 - 0) + 0);
    const caracter = characters.charAt(nAleatorio);
    return caracter;
}

//função com parâmetro e sem retorno
function olaNome (nome = 'não foi inserido um nome') {
    console.log('Olá' + nome);
}

//função com parâmetro e com retorno
function soma (n1, n2){
    return n1 + n2;
}
//chamada de função sem parâmetro e sem retorno
data();

//chamada de função sem parâmetro e com retorno
console.log(caracterAleatorio());

//chamada de função com parâmetro e sem retorno
olaNome(' Sarah');

//chamada de função com parâmetro e com retorno
const resultado = soma(1,2);
console.log(resultado);