index.js
import express from 'express';
import { servicoBuscarFatoPorAno, servicoValidacao } from "./servico/servico.js";

const app = express();

app.get('/', (req, res) => {
    const anoFato = parseInt(req.query.ano);

    if (isNaN(anoFato)) {
        return res.json({ erro: "Ano inválido, por favor envie um número." });
    }

    const validacao = servicoValidacao(anoFato);
    if (validacao === "Ano inválido") {
        return res.json({ erro: validacao });
    }

    const fato = servicoBuscarFatoPorAno(anoFato);
    res.json({ ano: fato });
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080");
});