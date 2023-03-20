console.log('Estou desenvolvendo em java-script');
// comentário de uma linha
/* comentário de mais 
de uma linha 
Três formas de declarar uma variavel em javascript (var, let e const)*/

let nome = 'Sarah';
let idade = 18;
let trabalho = true;
let altura_pessoa = 1.48; // se colocar aspas vira string
let cores_favoritas = ['rosa', 'preto', 'azul']; // array
let endereco = {
    logradouro: 'Avenida',
    nmlog: 'Brasil',
    num: '200-A',
    bairro: 'Centro'
}; //objeto
let covid = null;
let dengue;
console.log(altura_pessoa);
console.log('Nome: ' + nome + ' tem ' + idade + ' anos');
console.log('');
console.log(typeof(cores_favoritas));
console.log('--------------------------------------');
const ehArray = Array.isArray(cores_favoritas);
console.log(ehArray === true ? 'É um array' : 'Não é  um array');
if (ehArray === true) {
    console.log('É um array');

} else {
    console.log('Não é um array');
}


//mostrar valor de objeto
console.log('Objeto; ');
console.log(endereco.bairro);
console.log(endereco.logradouro + ' ' + endereco.nmlog + ' nº' + endereco.num + ' -' + endereco.bairro);