
console.log('Exemplo array');
let notas = [9, 8.5, 7];
console.log(notas);
console.log('1º nota: ' + notas[0]);
console.log('2º nota: ' + notas[1]);
console.log('3º nota: ' + notas[2]);

// editar posições do array 
notas[0] = 'MB'
notas[1] = 'MB'
notas[2] = 'B'
console.log('Notas convertidas:');
console.log(notas[0] + ' - ' + notas[1] + ' - ' + notas[2]);
console.log('@-@ UwU o.O :p :/ >.> >< ^^ OwO =.= =~=')

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

console.log('3º aluno: ');
console.log( alunos[2].nome + ' - ' + alunos[2].dt_nasc + ' - ' + alunos[2].sexo);