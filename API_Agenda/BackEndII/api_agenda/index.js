import express from "express";
import { buscaContatoPorId } from "./servicos/buscaServico.js";

const app = new express();
const port = 3000;


app.get('/contatos/:id', async (req, res) => {
    const id = req.params.id;

    if(id){
        const contato = await buscaContatoPorId(id);
        if(contato.length > 0){
            res.status(200).json(contato)
        }
    }
})

app.listen(prompt, () => {
    let data = new Date ()
    console.log("Servirdor iniciado em:" + data )
})