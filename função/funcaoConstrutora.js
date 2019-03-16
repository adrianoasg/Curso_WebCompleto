function Carro(velocidadeMaxima = 200, delta = 5 ){
    //atributo privado
    let velociadaAtual = 0

    //metodo publico
    this.acelerar = function () {
        if (velociadaAtual + delta <= velocidadeMaxima){
            velociadaAtual += delta
        } else {
            velociadaAtual = velocidadeMaxima
        }
    }

    //metodo publico
    this.getVelocidadeAtual = function () { 
        return velociadaAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)