const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) //unicode
console.log(escola.indexOf('3'))

console.log(escola.substring(1))// inclui indice 1 até a o final
console.log(escola.substring(0, 3)) // indice 0 até 3

console.log('Escola '.concat(escola).concat("!"))
console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\d/, 'e')) //substitua todos os digitos pela letra e
console.log(escola.replace(/\w/g, 'e')) //substitua tudo pela letra e

console.log('Ana, Maria, Pedro'.split(',')) //tranforma em array 
console.log('Ana, Maria, Pedro'.split(/,/)) //tranforma em array 