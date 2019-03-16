const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(function(fabricante) {
    console.log(fabricante)
})
//callback nada mais é que você passar uma função 
//e essa função será chamada quando uma envento acontecer

// arrow
fabricantes.forEach(fabricante => console.log(fabricante))