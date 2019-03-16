//aula seção  3, aula 48

let a = 3

global.b = 123
this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

//criando uma variável maluca: sem var e let
abc = 123 //não faça isso
console.log(global.abc)

//module.exports = {e: 456, f: false, g: 'teste'}

//em Node cada arquivo é um modulo diferente

//na WEB todos os arquivos é muitas vezes minificado gera um arquivo só, tudo está disputando ali no escopo global