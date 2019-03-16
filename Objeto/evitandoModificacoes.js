//Object.preventExtensions - não pode adicionar novos atributos nesse objeto
const produto = Object.preventExtensions ({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca' //não consegue adicionar novos atributos
delete produto.tag
console.log(produto) //pode excluir

//Object.seal
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa) //selar Objeto - Não consegue adicionar novos atributos e nem excluir - mas consegue modificar os valores dos atributos
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobreNome = 'Silva'
delete pessoa.nome
pessoa.idade = 20
console.log(pessoa
)