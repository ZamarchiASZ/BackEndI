const express = require ('express');
const app = express();
const calculaIMC = require ('./servico/servicoum/calculadoraIMC');

app.get('/', (req, res) => {
    let peso = req.query.peso;
    let altura = req.query.altura;

    if (calculaIMC.validaParametro(req.query.peso) && (calculaIMC.validaParametro(req.query.altura))) { 

    let imc = calculaIMC.efetuarCalculoIMC(peso, altura);
    let status = calculaIMC.retornaStatusIMC(imc);

    let json = {imc: imc, status: status};
    res.json(json);
    }
    else{
        res.status(400).json({Error: 'Peso ou altura inválidos'});
    }
});

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data);

});