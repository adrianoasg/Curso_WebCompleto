//operador ternario
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'     //função arrow
console.log(resultado(7.1))
console.log(resultado(6.7))

//ou também
const resultado2 = nota => {
    return nota >= 6 ? 'Aprovado' : 'Reprovado' 
} 
console.log(resultado2(6))
console.log(resultado2(5.9))

//Também pode armazenar em uma constante
//const status = nota >= 7 ? 'Aprovado' : 'Reprovado' 