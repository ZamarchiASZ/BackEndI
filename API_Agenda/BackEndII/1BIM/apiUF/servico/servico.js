import colecaoUF from "../dados/dados.js";

export const buscarUfs = () => {
    return colecaoUF;
} //retorna toda a coleção

export const buscarUFsPorNome = (nome) => {
    return colecaoUF.filter(uf => uf.nome.toLowerCase().includes(nome.toLowerCase()));
}; //busca UF pelo nome

export const buscarUFsPorId = (id) => {
    const idUF = parseInt(id);
    return colecaoUF.find(uf => uf.id === idUF);
};  // retorna o id

export const buscarPorSigla = (sigla) => {
    return colecaoUF.filter(uf => uf.uf.toLowerCase().includes(sigla.toLowerCase))
}