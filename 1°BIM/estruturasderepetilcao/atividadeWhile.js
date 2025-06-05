import rl from 'readline-sync';

//1
let num = rl.questionInt("iNFORME UM NUMERO PARA OBTER A TABUADA: ");
let cont = 1;
while (cont <= 10) {
    console.log(`${num} X ${cont} = ${num * cont}`);
    cont++;
}

//2
let numAlunos = rl.questionInt("Informe o numero de alunos da turma: ");

let contAlunos = 1;
let somaMedias = 0;
while (contAlunos <= numAlunos) {
    console.log(`Aluno${contAlunos}`);
    
    let contBimestri = 1;
    let somaNotas = 0;

    while (contBimestri <= 4) {
        let nota = rl.question(`Informe a nota do ${contBimestri}° bimestre do aluno ${contAlunos};`)
        somaNotas += nota;
        contBimestri++;
        
    }

    let mediaAluno = somaNotas / 4;
    somaMedias += mediaAluno;
    console.log(`Média do aluno ${contAlunos}: ${mediaAluno.toFixed(2)}`);
    contAlunos++;
}

let mediaGeralTurma = somaMedias
/ numAlunos;
console.log(`Média Geral da Turma: ${mediaGeralTurma.toFixed(2)}`);