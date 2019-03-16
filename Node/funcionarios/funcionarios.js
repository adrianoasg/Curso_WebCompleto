const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

//filtrar funcionario chines do sexo feminino com menor salário
const chineses = f => f.pais ==='China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response =>{
    const funcionarios = response.data
    console.log(funcionarios)

    //mulher chinesa com menor salário?
    const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)

    console.log('Menor salário')
    console.log(func)
})