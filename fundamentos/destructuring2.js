//Array
const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7 , 9 ,8] //uma forma de pegar multiplos elementos e desustrutrar 
//tb atribiu a várias variáveis usando apenas uma única atribuição
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]] //extrai do segundo vetor o segundo elemento
console.log(nota)