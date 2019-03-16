let dobro = function(a) {
    return 2 * a
}
//function arrow
dobro = (a) => {
    return 2 * a
}
//com apenas um unico parametro, sintaxe reduzia, retorno implicito
dobro = a => 2 * a
console.log(dobro(Math.PI))

let ola = function() {
    return 'olá'
}

ola = () => 'olá'
ola = _ => 'ola' //com um unico parametro
console.log(ola())