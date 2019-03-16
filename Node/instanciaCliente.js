//expotou um objeto do node ele faz cache - se o objeto já estiver sido criado ele retorna sempre a mesma instância
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

//novas instâncias criadas apartir de uma factory
const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)
