const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao) //para acessar nesse contexto precisa da variável this
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e OO

//Solução
const falarDePessoa = pessoa.falar.bind(pessoa) //bind é um metodo que amarra o objeto pra ele ser o donoo da execução
falarDePessoa()