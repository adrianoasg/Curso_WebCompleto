console.log(module.exports)
console.log(module.exports === this) //this é uma referencia para o mesmo objeto que module.exports aponta
console.log(module.exports === exports)//exports é uma referencia para o mesmo objeto que module.exports aponta

this.a = 1
exports.b = 2
module.exports.c = 2 

exports = null 
console.log(module.exports)

exports = {
    nome: 'Teste'
}

console.log(module.exports) //mesmo mudando a referencia duas vezes usando EXPORTS o module.exports continua sendo o mesmo objeto

//forma correta
module.exports = { publico: true }