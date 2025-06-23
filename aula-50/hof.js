//* Uma high-order function nada mais é do que uma função que recebe outra função como parâmetro

//? JavaScript é uma linguagem multi-paradigma, e seu suporte ao paradigma Funcional nos permite utilizar High-Order Functions (funções que operam sobre outras funções).

function calcular(a, b, operacao) {
  console.log("Realizando uma operação.")
  const resultado = operacao(a, b) // somar(3, 5)
  return resultado
}

function somar(x, y){
  console.log("Realizando uma soma.")
  return x + y
}

//* Utilizando a função 'somar' como parâmetro da função calcular no lugar de 'operação' (HOF)
console.log(calcular(3,5, somar)) 


//* Utilizando uma função anônima como parâmetro de uma HOF
console.log(calcular(8, 4, function (x, y) { 
  console.log("Realizando uma subtração.")
  return x - y
}))

//* Função que será usada para exibir informações sobre os elementos da lista
function exibirElemento(elemento, indice, array) {
  // Exibe no console um objeto contendo o elemento atual, seu índice e a lista completa
  console.log({
    elemento, // O valor do elemento atual (ex.: "Maçã", "Banana", etc.)
    indice,   // A posição do elemento dentro da lista (ex.: 0, 1, 2, etc.)
    array     // A lista completa (ex.: ["Maçã", "Banana", "Laranja", "Limão"])
  });
}

// Array com algumas frutas de exemplo
const lista = ["Maçã", "Banana", "Laranja", "Limão"];

// Um `for` para percorrer (iterar) cada elemento da lista
for (let i = 0; i < lista.length; i++) { // `i` é o índice que vai de 0 até o tamanho da lista - 1
  // Chamamos a função `exibirElemento`, passando:
  // 1. O elemento atual da lista (`lista[i]`)
  // 2. O índice atual (`i`)
  // 3. A lista completa (`lista`)
  exibirElemento(lista[i], i, lista);
}

//* Aqui usamos um próprio método do JavaScript, usando uma callback function
//? callback: É só uma função que você passa como argumento para outra função.
lista.forEach(exibirElemento) //* Usando o forEach com High-Order Functions

lista.forEach(function (elemento, indice, array) { //* E aqui usando o forEach com funções anônimas
  console.log({
    elemento,
    indice,
    array
  })
})