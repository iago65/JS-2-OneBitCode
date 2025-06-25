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

// O resultado será um array só com os nomes dos personagens: 
console.log(nomes)

//----------------------------------------------------------------------------------
//* FILTER: Filtrar elementos de um array (como uma peneira!)

//* FORMA TRADICIONAL COM FOR (comentada)
// const orcs = []
// for (let i = 0; i < personagens.length; i++) {
//   if (personagens[i].raca === "Orc"){
//     orcs.push(personagens[i])
//   }
// }

//* FORMA MODERNA COM FILTER
// O filter() é uma HOF que FILTRA elementos do array original
// Ele cria um NOVO array apenas com os elementos que passaram no "teste"
const orcs = personagens.filter(function (personagem) {
  // Para cada personagem, fazemos um teste:
  // Se o teste retornar TRUE, o personagem vai pro novo array
  // Se retornar FALSE, o personagem é ignorado
  return personagem.raca === "Orc" // Teste: "É um Orc?"
})

// O resultado será um array só com os personagens que são da raça Orcs:
console.log(orcs)
//------------------------------------------------------------------------------------
//* REDUCE: É como um "liquidificador" que pega vários ingredientes (array) e faz uma vitamina final (valor único)

//* EXEMPLO 1: SOMAR TODOS OS NÍVEIS DOS PERSONAGENS
const nivelTotal = personagens.reduce(function (valorAcumulado, personagem) {
  // valorAcumulado = é como uma "caixinha" onde guardamos o resultado
  // personagem = é o personagem atual que estamos processando
  
  // Pegamos o que já tínhamos na caixinha + o nível do personagem atual
  return valorAcumulado + personagem.nivel
  
  // PASSO A PASSO:
  // 1ª volta: caixinha=0 + Thrall(42) = 42
  // 2ª volta: caixinha=42 + Garrosh(28) = 70  
  // 3ª volta: caixinha=70 + Varok(35) = 105
  // ...e assim por diante até somar todos!
  
}, 0) // 0 = valor inicial da nossa "caixinha"

console.log(nivelTotal)

//* EXEMPLO 2: AGRUPAR PERSONAGENS POR RAÇA 
const racas = personagens.reduce(function (valorAcumulado, personagem) {
  // valorAcumulado = um objeto {} que vai guardar as raças organizadas
  // personagem = personagem atual
  
  // Pergunta: "Já existe essa raça no nosso objeto?"
  if (valorAcumulado[personagem.raca]) {
    // Se JÁ EXISTE: adiciona o personagem na lista dessa raça
    valorAcumulado[personagem.raca].push(personagem)
  } else {
    // Se NÃO EXISTE: cria uma nova lista com esse personagem
    valorAcumulado[personagem.raca] = [personagem]
  }
  return valorAcumulado
}, {}) // {} = começamos com um objeto vazio

console.log(racas)

//----------------------------------------------------------------------------------------------
//* SORT: Organizar/ordenar arrays (como organizar uma fila por altura!)

//* ORDENANDO PERSONAGENS POR NÍVEL (do menor para o maior)
personagens.sort(function (a, b) {
  // a = primeiro personagem da comparação
  // b = segundo personagem da comparação
  
  // A mágica do sort: ele compara dois elementos de cada vez
  // Se retorna NÚMERO NEGATIVO: "a" vem antes de "b"
  // Se retorna NÚMERO POSITIVO: "b" vem antes de "a"  
  // Se retorna ZERO: "a" e "b" ficam na mesma posição
  
  return a.nivel - b.nivel // Ordenação crescente (menor → maior)
  
  // EXEMPLO:
  // Jaina(26) vs Garrosh(28): 26-28 = -2 (negativo) -> Jaina vem primeiro
  // Garrosh(28) vs Muradin(29): 28-29 = -1 (negativo) -> Garrosh vem primeiro
  // E assim por diante até organizar todos!
})

// ATENÇÃO: o sort() MODIFICA o array original! (diferente do map, filter, etc.)
// Por isso é interessante utilizar o slice() para fazer um "backup" do array original
console.log("Personagens ordenados por nível (menor → maior):")
console.log(personagens)

// BONUS: Para ordenar do maior para o menor, basta inverter:
// return b.nivel - a.nivel