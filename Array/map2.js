const carrinho = [
    '{"nome": "Borrancha", "preco": 3.45, "QTD": 2}',
    '{"nome": "caderno", "preco": 13.90, "QTD": 3}',
    '{"nome": "Kit de Lapis", "preco": 41.22, "QTD": 4}',
    '{"nome": "Caneta", "preco": 7.50, "QTD": 5}'
]

//Retronar um array apenas com os preços
const paraObjeto = json => JSON.parse(json) //transforma de JSON para objeto
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)

//Retronar um array apenas com os nomes
const paraObjeto2 = json2 => JSON.parse(json2) //transforma de JSON para objeto
const apenasNome = produto2 => produto2.nome

const resultado2 = carrinho.map(paraObjeto2).map(apenasNome)
console.log(resultado2)

//Retronar um array apenas quantidade
const paraObjeto3 = json3 => JSON.parse(json3) //transforma de JSON para objeto
const apenasQtd = produto3 => produto3.QTD

const resultado3 = carrinho.map(paraObjeto3).map(apenasQtd)
console.log(resultado3)