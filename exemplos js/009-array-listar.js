let alunos = [
    {
        nome: 'Victoria Labadesa',
        dt_nasc: '11/11/2011',
        sexo: 'F'
    },
    {
        nome: 'Nathalia Fonseca',
        dt_nasc: '9/1/1999',
        sexo: 'F'
    },
    {
        nome: 'Keli Nascimento',
        dt_nasc: '5/5/2005',
        sexo: 'F'
    },
    {
        nome: 'Yudi Namaizawa',
        dt_nasc: '17/9/2008',
        sexo: 'M'
    }
]

let tamanhoArray = alunos.length;

for(let cont = 0; cont < tamanhoArray; cont++){
    console.log((cont + 1) + ' º aluno: ');
    console.log('Nome: ' + alunos[cont].nome);
    console.log('Data de nascimento: ' + alunos[cont].dt_nasc);
    console.log('Sexo: ' + alunos[cont].sexo);
    console.log('---------------------------------')
}



