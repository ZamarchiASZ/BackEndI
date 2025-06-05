import rl from 'readline-sync';

//1
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let palpite;

do {
    palpite = rl.questionInt("Tente Adivar quantas pessoas te odeiam no mundo (entre 1 e 100): ")
    if (palpite === numeroAleatorio) {
        console.log("Parabéns Você adivinhou")
    } else if (palpite < numeroAleatorio){
        console.log("Um pouco mais de pessoas, tenta de novo") 
    }else{
        console.log("Não é pra tanto, abaixa um pouquinho")
    }

}while (palpite !== numeroAleatorio);