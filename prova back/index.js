//Amanda Santos Zamarchi, Ariane de Oliveira Pereira


import entradaDados from "readline-sync"

let escolha;
const somar = (num1, num2) => num1 + num2;

const subtrair = (num1, num2) => num1 - num2;

const multiplicar = (num1, num2) => num1 * num2;

const dividir = (num1, num2) => num1 / num2;

do {
    escolha = entradaDados.questionInt("\n1 - Soma \n2 - Subtração \n3 - Multiplicação \n4 - Divisão \n5 - Sair\nEscolha a opção apartir do número: ");
    if (escolha !== 5) {
        if (escolha == 1) {
            let num1 = entradaDados.questionFloat("Informe o primeiro número que será somado: ");
            let num2 = entradaDados.questionFloat("Informe o segundo número que será somado: ");
            console.log("O resultado é:", somar(num1, num2));
        }
        else if (escolha == 2) {
            let num1 = entradaDados.questionFloat("Informe o primeiro número que será subtraído: ");
            let num2 = entradaDados.questionFloat("Informe o segundo número que será subtraído: ");
            console.log("O resultado é:", subtrair(num1, num2));
        }
        else if (escolha == 3) {
            let num1 = entradaDados.questionFloat("Informe o primeiro número que será multiplicado: ");
            let num2 = entradaDados.questionFloat("Informe o segundo número que será multiplicado: ");
            console.log("O resultado é:", multiplicar(num1, num2));
        }
        else if (escolha == 4) {
            let num1 = entradaDados.questionFloat("Informe o primeiro número que será dividido: ");
            let num2 = entradaDados.questionFloat("Informe o segundo número que será dividido: ");

            if (num2 == 0) {
                console.log("Escolha outro número, pois não é possivel dividir zero");
                continue
            } else {
                console.log("O resultado é:", dividir(num1, num2));
            }
        }
        else {
            console.log("A opção escolhida não existe selecione outra!\n")
        }
    }
    else {
        break
    };

} while (escolha !== 5);
