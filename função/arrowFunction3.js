let comparaComThis = function(param) {
    console.log(this === param)
}
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj) //this aponta para obj e não mais para global
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param) //contexto lexico dentro do modulo(node) - não aponta pro global
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThis.bind(obj) //não consegue mudar o this - não consegue mudar a refencia com bind
comparaComThisArrow(obj) //this em uma função arrow é um this associado a contexto no qual a função foi escrita
comparaComThisArrow(module.exports)