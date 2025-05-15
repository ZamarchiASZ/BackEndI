//1
let apartamento = {
    quartos: 2,
    tipo: 'apartamento',
    endereco: 'Avenida Principal, 456 - Centro',
    andar: 7
}

console.log(`Apartamento com ${apartamento.quartos} quartos, 
localizado no ${apartamento.andar} andar.
Localizado em  ${apartamento.endereco}.`);
//2
let ProdutoEmbalado = {
    nome:"Laptop HP",
    categoria: "Eletrônicos",
    peso: 1.5,
    preco: 3500.00
}

console.log(`O produto ${ProdutoEmbalado.nome},
da categoria ${ProdutoEmbalado.categoria},
pesando ${ProdutoEmbalado.peso} Kg.
Está à venda por R$ ${ProdutoEmbalado.preco}.`)

//3
class Imovel {
constructor(quartos, tipos, endereco) {
    this.quartos = quartos
    this.tipos = tipos
    this.endereco = endereco
}
exibirInformacoes() {
    return `${this.tipo} com ${this.quartos} quartos,
localizado na ${this.endereco}`
}
}
const casa = new Imovel(4, "casa", "Rua da Amizade, 789 - Bairro Alegre")
const apartamentos = new Imovel(2, "Apartamento", "Avenida da Paz, 123 - Centro")

console.log(casa.exibirInformacoes());
console.log(apartamentos.exibirInformacoes())

//4
class Veicolo {
    constructor(marca, modelo, ano) {
        this.marca = marca
        this.modelo = modelo 
        this.ano = ano
    }
    exibirDetales() {
        return ` Marca do carro ${this.marca} no modelo ${this.modelo}, fabricado no ano ${this.ano}`
    }
    }
    const Carro = new Veicolo("Toyota", "Corolla", 2022)
    const motocicleta = new Veicolo("Honda", "Corola", 2021)
    
    console.log(Carro.exibirDetales());
    console.log(motocicleta.exibirDetales())