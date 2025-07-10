//import fatosHistoricos from "../Dados/fatos.js";

function servicoBuscarFatoPorAno(ano) {
    if (ano < 1920 || ano > 2020) {
        return "Ano fora do intervalo válido (1920-2020)";
    }

    const fato = fatosHistoricos.find(f => f.Ano === ano.toString());
    if (fato) {
        return `Fato histórico de ${ano}: ${fato.Fato}`;
    }
    return `Nenhum fato histórico encontrado para o ano ${ano}.`;
}

function servicoValidacao(ano) {
    const anoValido = ano >= 1920 && ano <= 2020;
    return anoValido ? "Ano válido" : "Ano inválido";
}

export { servicoBuscarFatoPorAno, servicoValidacao };