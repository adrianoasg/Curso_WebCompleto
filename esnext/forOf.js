for (let letra of "Cod3r"){
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) { //percorre em cima do indice
    console.log(i)
}

for (let assunto of assuntosEcma) { //percorre diretamente os valores
    console.log(assunto)
}

const assuntosMap = new Map ( [
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for (let assunto of assuntosMap) { //imprime os arrays com chave e valor
    console.log(assunto)
}

for (let [c, v] of assuntosMap) { //imprime os arrays com chave e valor
    console.log(c, v)
}

for (let chave of assuntosMap.keys()) { //imprime as chaves
    console.log(chave)
}

for (let valor of assuntosMap.values()) { //imprime os valores
    console.log(valor)
}

for (let [ch, vl] of assuntosMap.entries()) { //percorrer as entradas(entries) usando um detructuring - desestruturando chave e valor
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c']) //percorrendo um Set
for  (let letra of s) {
    console.log(letra)
}