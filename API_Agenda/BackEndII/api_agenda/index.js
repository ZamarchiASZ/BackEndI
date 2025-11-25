import express from "express";
import { buscaContatoPorId, buscaTodosContatos } from "./servicos/buscaServico.js";

const app = new express();
const port = 3000;


app.get('/contatos/:id', async (req, res) => {
    const id = req.params.id;

    if (id) {
        if (isNaN(id)) {
            const contato = await buscaContatoPorId(id);
            if (contato.length > 0) {
                res.status(200).json(contato)
            } else {
                res.status(404).send("Contato não encontrado!");
            }
        } else {
            res.status(400).send("Requisição Inválida!")
        }
    } else {
        const contatos = await buscaTodosContatos();
        res.status(200).son(contatos)
    }
})

app.listen(prompt, () => {
    let data = new Date()
    console.log("Servirdor iniciado em:" + data)
})