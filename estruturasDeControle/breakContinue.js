const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let x in nums){
    if(x == 5){
         break
    }
    console.log(`${x} = ${nums[x]}`)
}

for(let y in nums){
    if(y == 5) {
        continue //interrompe a repetição corrente e vai para a proxima
    }
    console.log(`${y} = ${nums[y]}`)
}

//Rotulo
//não use esse código só um exemplo - tem alternativas mais interessantes
externo:
for(let a in nums){
    for(let b in nums){
        if(a == 2 && b == 3) break // ele vai chamar o break do for mais interno
        console.log(`Par = ${a}, ${b}`)
    }
}

console.log('Fim!')

externo:
for(let c in nums){
    for(let d in nums){
        if(c == 2 && d == 3) break externo// ele vai chamar o break do for mais externo
        console.log(`Par2 = ${c}, ${d}`)
    }
}

console.log('Fim!')