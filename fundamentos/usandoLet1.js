//escopo diferente var e let
var numero = 1
{
    let numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)

console.log('------------------------------------')

let numero2 = 1
{
    let numero2 = 2
    console.log('dentro = ', numero2)
}
console.log('fora = ', numero2)