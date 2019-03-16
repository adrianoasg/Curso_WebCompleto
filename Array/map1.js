const nums = [1, 2, 3, 4, 5]
//For como propósito - MAP - gera um novo Array
let resultado = nums.map(function(e) {
    return e * 2
})

console.log(nums)
console.log(resultado)

//function Arrow
const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)