//Armazenando uma função em uma variável
const impimiriSoma = function (a, b){ //A variável impimirSoma receber uma função anomina
    console.log(a + b)
}

impimiriSoma(2, 3)

//Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

//retorno implícito - função arrow
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')