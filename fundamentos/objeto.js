const prod1 = {} //objeto vazio
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40//evitar atibutos com espaço

console.log(prod1)
console.log(prod1.nome, " Preço:", prod1.preco)

//ou
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
}

console.log(prod2)

//json - formato textual, não é um objeto
'{"nome": "Camisa Polo", "preco": 79.90}'

