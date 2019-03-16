const funcs = []

for(let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}
//let tem escopo de função
funcs[2]()
funcs[6]()
funcs[8]()