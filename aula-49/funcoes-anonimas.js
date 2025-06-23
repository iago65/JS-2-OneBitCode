function somar(a, b) {
  return a + b
}

let operacao = somar

// console.log(operacao(4, 5))

operacao = function (a, b){
  return a - b
}

// console.log(operacao(4, 5))

//* Exemplo puro do que é uma função anônima
let show = function() {
  console.log("Anonymous function")
} 
//? Neste exemplo, a função não tem um nome, e como precisamos chamar essa função em algum momento, armazenamos ela em uma váriavel, nesse caso a variável 'show'.

show()
