import colecaoHaikyuu from "./tarefas/dados.js";
import express from 'express';

const app = express();


app.get('/Haikyuu', (req, res) =>  {
    res.json(colecaoHaikyuu);
});

app.get('/haikyuu/:idHai', (req, res) => {
    const idHai = parseInt(req.params.idHai);
    let mensagemErro = '';
    let hai;

    if (!isNaN(idHai)) {
     hai = colecaoHaikyuu.find(u => u.id === idHai);
     if (!hai) {
        mensagemErro = "Filme ou temporada não encontrada";
     }   
    }else {
        mensagemErro = 'Número iválida';
    }
    if (hai) {
        res.json(hai);
    }else {
        res.status(404).json({ "erro": mensagemErro})
    }

});

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor iniciado na porta 8080 em: ' + data);
});