const filhas = ['Valeskah', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']
const todos = filhas.concat(filhos)
console.log(todos, filhas, filhos)
const todos2 = filhas.concat(filhos, 'Fulanos')
console.log(todos2)

console.log([].concat([1, 2], [3, 4], 5, [[6 ,7]]))
console.log(['a', 'b'].concat([1, 2], [3, 4], 5, [[6 ,7]]))