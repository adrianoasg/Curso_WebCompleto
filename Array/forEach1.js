
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

//usando função calback - recebe 3 parâmetros (nome, indice, array)
aprovados.forEach(function(nome, indice) { //o indice é sempre passado como segundo parametro
    console.log(`${indice + 1}) ${nome}`)
})

//Arrow function
aprovados.forEach(nome => console.log(nome))

//Armazenando uma função em uma variável e passar essa função por parâmetro para o forEach
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

