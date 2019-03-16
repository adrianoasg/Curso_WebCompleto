//não tem sentido usar
console.log('a =', a)
var a = 2
console.log('a =', a)

//igual
var a 
console.log('a =', a)
a = 2
console.log('a =', a)

//dentro de função
function teste(){
    console.log('a =', a)
var a = 2
console.log('a =', a)
}
teste()
console.log('a =', a)

//com let não ocorre
console.log('a =', a)
let a = 2
console.log('a =', a)

