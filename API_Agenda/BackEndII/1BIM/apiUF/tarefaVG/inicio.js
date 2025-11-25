import express from "express";
import jogos from "./dados/dados.js";

const app = express();


app.get('/jogos', (req, res) => {
res.json(buscarGames());
});


app.get('/jogos/id/:id', (req, res) => {
const jogo = buscarGamePorId(req.params.id);
if (jogo) {
res.json(jogo);
} else {
res.status(404).json({ erro: "Jogo não encontrado." });
}
});


app.get('/jogos/titulo/:titulo', (req, res) => {
res.json(buscarGamesPorTitulo(req.params.titulo));
});


app.get('/jogos/plataforma/:plataforma', (req, res) => {
res.json(buscarGamesPorPlataforma(req.params.plataforma));
});


app.get('/jogos/genero/:genero', (req, res) => {
res.json(buscarGamesPorGenero(req.params.genero));
});


app.listen(8080, () => {
const data = new Date();
console.log("Servidor rodando na porta 8080 - " + data);
});

const buscarGames = () => jogos;

const buscarGamePorId = (id) => {
const idGame = parseInt(id);
return jogos.find(game => game.id === idGame);
};

const buscarGamesPorTitulo = (titulo) => {
return jogos.filter(game => game.titulo.toLowerCase().includes(titulo.toLowerCase())
);
};

const buscarGamesPorPlataforma = (plataforma) => {
return jogos.filter(game => game.plataforma.toLowerCase().includes(plataforma.toLowerCase())
);
};

const buscarGamesPorGenero = (genero) => {
return jogos.filter(game => game.genero.toLowerCase().includes(genero.toLowerCase())
);
};

