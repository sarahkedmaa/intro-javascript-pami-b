let entrada =require('prompt-sync')();
let idade = entrada('Digite sua idade: ');
if (idade == 18){
    console.log('Você tem idade para a carteira de habilitação');
} else if (idade > 18){
    console.log('Você já poderia estar dirigindo se tivesse habilitação');
} else{
    console.log('Você só anda de carona!');
}