const personagens = [
  {nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã"},
  {nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro"},
  {nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro"},
  {nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino"},
  {nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga"},
  {nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa"},
  {nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro"}
]

//* MAP: Transformação em arrays

//* FORMA TRADICIONAL COM FOR (comentada)
// const nomes = []
// for (let i = 0; i < personagens.length; i++) {
//   nomes.push(personagens[i].nome)
// }

//* FORMA MODERNA COM MAP
// O map() é uma HOF que TRANSFORMA cada elemento do array original
// Ele cria um NOVO array sem modificar o original
const nomes = personagens.map(function (personagem){
  // Para cada personagem do array, pegamos apenas o nome
  // O map automaticamente:
  // 1. Percorre todos os elementos do array
  // 2. Executa esta função para cada elemento
  // 3. Coleta todos os valores retornados em um novo array
  return personagem.nome // Retorna apenas a propriedade 'nome'
})

// O resultado será um array só com os nomes: 
// ["Thrall", "Garrosh", "Varok", "Uther", "Jaina", "Tyrande", "Muradin"]
console.log(nomes)

//----------------------------------------------------------------------------------
//* FILTER: O próprio nome já diz, serve para filtrar elementos em um array, e também é uma HOF

const orcs = []

for (let i = 0; i < personagens.length; i++) {
  if (personagens[i].raca === "Orc"){
    orcs.push(personagens[i])
  }
}

console.log(orcs)