const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)

// Adicionar elementos
// push: Adicionar um elemento no final do array
let tamanho = arr.push("Boromir") // Adicionando Boromir no final do array e também o "push" retorna pra gente o novo tamanho do array
console.log(arr)
console.log(tamanho)

// unshift: Adiciona elementos no começo do array
tamanho = arr.unshift("Teste") // Adicionando Boromir no começo do array e acontece também de retornar o novo tamanho do array
console.log(arr)
console.log(tamanho)

// --------------------------------------------------------------------------------------------
// Remover Elementos
// pop(Estourar): Remover um elemento que está no final do array
let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento) 

// shift: Remover elementos no começo do array
ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento) 

// ------------------------------------------------------------------------------------------------
// Pesquisar por um Elemento
// includes: Ele pesquisa por um elemento dentro do array, e verifica se existe esse elemento dentro do array, se tiver ele retorna True se não False
const inclui = arr.includes("Gandalf") 
console.log(inclui)

// indexOf: Ele procura a posição de indice de um valor dentro do array.
const indice = arr.indexOf("Gandalf")
console.log(indice)

//-----------------------------------------------------------------------------------------------------
// Cortar e Concatenar
// slice: Funciona como se fosse o Ctrl+X de cortar do sistema. Ele cria tipo uma cópia de uma parte do array
const hobbits = arr.slice(0,4) // Dentro dele eu coloco de qual indice até qual indice quero pegar do array
const outros = arr.slice(-4) // o -algum número referencia o final do array, tipo partindo do final dele.
console.log(arr)
console.log(hobbits)
console.log(outros)

// concat: Seria concatenar mesmo, consigo juntar 2 arrays por exemplo
const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)

//---------------------------------------------------------------------------------------------------------
// Substituição dos Elementos

const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento") // O Gandalf foi removido, e foi inserido o "Gandalf, o Cinzento"
console.log(sociedade)
console.log(elementosRemovidos)

// Iterar sobre os Elementos ***********Importante************* 
for (let i = 0; i < sociedade.length; i++) {
  const elemento = sociedade[i]
  console.log(elemento + " se encontra na posição: " + i)
}