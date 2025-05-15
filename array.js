// Atividade Array 

//1
let nomes = [ "Amanda", "Ariane", "Ana Lívia", "Davi", "Victor"]

console.log (nomes[2]);

nomes.push("Alves");

nomes.shift();

console.log(nomes);
//2
let numeros = [1,2,3,4,5,6,7,8,9,10];

numeros.reverse();

numeros.sort((a, b) => a - b);

let numerosString = numeros.join("-");

console.log(numeros);

//3
let notas = [1,5,9,7];

let soma = notas.reduce((acc, notas) => acc + notas, 0);
let media = soma / notas.length;

exibirMedia = media >= 6 ? "A média é maior ou igual a 6" : "A média é menor que 6";

console.log(exibirMedia);

//5
let carrinho = [];

function adicionarItem(item) {
carrinho.push(item);
}
// push() adiciona o item.

function removerItem(item) {
let index = carrinho.indexOf(item);
if (index !== -1) {
carrinho.splice(index, 1);
}
}
// indexOf() encontra a posição do item. splice() remove se o item existir.

function listarItens() {
console.log("Itens no carrinho:", carrinho);
}
// Mostra os itens atuais do array carrinho.

//6
let numeros1 = [10, 5, 8, 2, 7];

let soma1 = numeros1.reduce((acc, val) => acc + val, 0);
let produto = numeros1.reduce((acc, val) => acc * val, 1);

console.log(produto);
// reduce() permite aplicar operações acumulativas.

//Na soma, o acumulador começa com 0.

//Na multiplicação, começa com 1 para não zerar o resultado.