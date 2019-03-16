function teste1(num){
    if(num > 7)
    console.log(num)
    console.log('Final')//sempre será executado
}
teste1(6)
teste1(8)

//Cuidado
function teste2(num){
    if(num > 7); {//Cuidado com o ; não usar com as estruturas de controle 
    console.log(num)
    }
}
teste2(6)
teste2(8)