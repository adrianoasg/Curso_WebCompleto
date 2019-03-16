{
    {
        {
            { 
                var sera = 'Será???' 
            }
        }
    }
}
//variável var é visível fora do bloco que ela foi criada
console.log(sera)

function teste(){
    var local = 123
    console.log(local)
}

teste()
//console.log(local) erro - só é visível dentro da função
