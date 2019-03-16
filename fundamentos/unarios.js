let num1 = 1
let num2 = 2

num1++ //pós-fixada
console.log(num1)
--num1 //pré-fixada - prioridade maior que num1++
console.log(num1)

console.log(++num1 === num2--)