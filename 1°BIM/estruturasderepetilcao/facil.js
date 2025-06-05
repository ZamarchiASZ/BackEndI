import rl from "readline-sync"

let frase = rl.question("Informe something: ");

//declaração da função
function Maiusculas(texto) {
    return texto.toUpperCase();    
}

//Expressão de função
const cxAlta = function(texto){
    return texto.toUpperCase();
}

//Arrow function 
const tudoMaiusculo = (texto) => texto.toUpperCase();


console.log(Maiusculas(frase));