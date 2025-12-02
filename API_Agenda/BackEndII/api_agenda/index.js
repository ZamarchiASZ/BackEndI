import express from 'express'
import { buscarContatoPorId, bsucarTodosContatos } from './servicos/buscaServico.js';
import { deletaContato } from './servicos/deletaServico.js';
import { validaContato } from '../validacao/valida.js';
import { cadastraContato } from './servicos/cadastroServico.js';

const app = new express()
app.use(express.json());

const port = 3000;

app.post('/contatos', async (req, res) => {
    const  nome = req.body.nome;
    const telefone = req.body.telefone;
    const email = req.body.email;

    const contatoValido = validaContato(nome, telefone, email);
    if (contatoValido.status) {
        await cadastraContato(nome, telefone, email);
        res.status(204).end();
    } else {
        res.status(400).json({mensagem: contatoValido.mensagem})
    }
})

app.get('/contatos', async (req, res) => {
    const contatos = await bsucarTodosContatos();
    res.status(200).json(contatos)
});

app.get('/contatos/:id', async (req, res) => {
    const id = req.params.id;

    if (id) {
        if (!isNaN(id)) {
            const contato = await buscarContatoPorId(id);
            if (contato.length > 0) {
                res.status(200).json(contato[0])
            } else {
                res.status(404).send('contato não encontrado')
            }
        } else {
            res.status(400).send('requisição inválida')
        }
    } else {
        const contatos = await bsucarTodosContatos();
        res.status(200).json(contatos);

    }
})

app.delete('/contato/:id', async (req, res) =>{
    const id = req.params.id;
    const resultado = await deletaContato(id);

    if(resultado.affectedRows > 0) {
        res.status (200).send ("Registro deletado com sucesso!")
    }else{
        res.status(404).send ("Registro não encontrado!")
    }
})

app.listen(3000, () => {
    let data = new Date()
    console.log('O servidor foi iniciado na porta 3000 em ' + data)
})