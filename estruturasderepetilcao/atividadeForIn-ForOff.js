//1
import entradaDados from "readline-sync";

let anterior = 0;
let atual = 1;

console.log("---Sequencia de Fibonacci---")
console.log(anterior)
console.log(atual)
for (let i = 3; i <=20; i++){
    let sequencia = anterior + atual;

    console.log(sequencia);

    anterior = atual;
    atual = sequencia;
}

//2
let nome = entradaDados.question(`Informe o nome da ${i}º pessoa: `);
let salario = entradaDados.questionFloat(`Informe o salário de ${nome}: `)
let importoRenda = 0;

if (salario <= 2100){
    importoRenda = 0;
}
else if (salario <= 2800){
    importoRenda = salario * 0.075;
}
else if (salario <= 3750){
    importoRenda = salario * 0.15;
}
else if (salario <= 4660){
    importoRenda = salario * 0.225;
}
else {
    importoRenda = salario * 0,275;
}
//1

const pessoa = {
    nome: "Amanda",
    idade: 16,
    sexo: 'M',
}

for (let dados in pessoa) {
    console.log(`${dados}: ${pessoa[dados]}`)
}

//2
let cores = ["Azul", "Branco", "vermelho", "Preto"]

for (let cor of cores) {
    console.log(`cor: ${cor}`)
}