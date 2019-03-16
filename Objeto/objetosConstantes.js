//Pode ser alterado o valor e nao o endereço de memória
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

//só pode atribuir uma vez
//pessoa = { nome: 'Ana'} erro

Object.freeze(pessoa) //congela objeto - não consegue mudar o objeto e nem deletar - Objeto constante

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)

const pessoaConstante = Object.freeze({ nome: 'Pedro' })
pessoaConstante.nome = 'Maria' //não irá atribuir o nome Maria
console.log(pessoaConstante)