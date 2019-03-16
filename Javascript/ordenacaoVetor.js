const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i = 0; i < notas.length; i++){ //use let
    console.log(`notas = ${notas[i]}`)
}

for(let i = 0; i < notas.length; i++){
    for(let j = i + 1; j < notas.length; j++){
        if (notas[i] > notas[j]) {
            let aux = notas[i]
            notas[i] = notas[j]
            notas[j] = aux
        }
    }
}

for(let i = 0; i < notas.length; i++){ //use let
    console.log(`notas ordenadas = ${notas[i]}`)
}