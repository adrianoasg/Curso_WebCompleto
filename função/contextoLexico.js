const valor = 'Global'

function minhafuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhafuncao()
}

exec() //a função carrega o contexto no qual ela foi declarada
