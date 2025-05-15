let pokemon = "Charmander"

function evoluir(){
  pokemon = "Charmeleon"
}

console.log(pokemon)
evoluir()
console.log(pokemon)

function criarAnimal() {
  let animal = "Gato"
}

// criarAnimal()
// console.log(animal)

// PORQUE NAO USAR O VAR
function avaliarNota (nota) {
  if (nota > 60) {
    var aprovado = true
    let situacao = "Aprovado"
  } else {
    var aprovado = false
    let situacao = "Reprovado"
  }

  console.log(nota)
  console.log(aprovado)
  console.log(situacao)
}

// avaliarNota(83)
// avaliarNota(49)

function ola(){
  var texto = "Ola, mundo"
}

// console.log(texto)

console.log(nome)
console.log(sobrenome)

var nome = "Iago"
let sobrenome = "Pinheiro"

console.log(nome)
console.log(sobrenome)