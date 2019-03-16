//Novo recurso do ES2015
//Desustrututação - tirar algo de dentro de objetos e array
//Objetos

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade} = pessoa //tire de dentro do objeto nome e idade
console.log(nome, idade)

const { nome: n, idade: i } = pessoa //muda o nome das variáveis
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

//Acessando Endereco
const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

//cuidado - atributos que não existem
//const { conta: { ag, num } } = pessoa
//console.log(ag, num)