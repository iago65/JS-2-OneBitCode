//? Uma função recursiva é uma função que chama ela mesma, e com isso ela se executa novamente e com isso se cria o que chamamos de recursão

//* Essa abaixo por exemplo é uma função recursiva que vai dividindo o número se ele for par, por 2 até o último valor possível a ser dividido
function dividir(num) { 
  console.log(num)
  if (num % 2 === 0){
    dividir(num / 2)
  } else {
    return num
  }
}

// dividir(2048)


//* É fundamental que uma função recursiva tenha uma forma de parar de chamar novas funções
function dobrar(num){
  console.log(num)
  dobrar(num * 2)
}

dobrar(1) //! Aqui ela estoura a pilha de chamadas


//? fatorial de 5: !5 === 5 * 4 * 3 * 2 * 1 === 5 * !4
function fatorial(num) {
  console.log("Número: " + num)
  if (num === 0){ //* Caso Base
    return 1
  } else if (num === 1) {
    return 1
  } else {
    console.log(num + " * !" + (num - 1))
    return num * fatorial(num - 1)
  }
}

// console.log(fatorial(5))

//? Exemplo: potencia(2, 3) = 2 * 2 * 2 = 8

function potencia(x, y) {
  if (y === 0) {
    return 1  //* Caso base: qualquer número elevado a 0 é 1
  } else {
    console.log(`${x} * ${x}^${y-1}`)
    return x * potencia(x, y - 1)  //? Chamada recursiva!
  }
}

console.log(potencia(8, 2))