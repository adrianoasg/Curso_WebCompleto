const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //massa quebrou o carro!, remove ultimo elemento do Array
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona um novo elemento na ultima posição
console.log(pilotos)

pilotos.shift() //Remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') //Adiciona no inicio
console.log(pilotos)

//splice pode adicionar e  remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') //adicionar apartir do indice 2 e não vai remover ninguem
console.log(pilotos)

//remover
pilotos.splice(3, 1) //apartir do indice 3 remover 1 elemento
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo Array - apartir do indice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //novo Array - apartir do indice 1 até o indice 4 - não adiciona o indice 4
console.log(algunsPilotos2)