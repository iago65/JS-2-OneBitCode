const arr = [
  "1° Nível",
  "2° Nível",               // Array comum.
  "3° Nível"
]

const arrBidimensional = [
  "1° Nível",
  ["2° Nível", 42, true],
  [
    ["3° Nível, 1° item", "Olá, Mundo!"],
    ["3° Nível, 2° item", "Oi, Mundo!"]                    // Array Bidimensional
  ],
  []
]

console.log (arr)
console.log (arrBidimensional)
console.log(arrBidimensional[0])
console.log(arrBidimensional[1])
console.log(arrBidimensional[1][0])
console.log(arrBidimensional[1][1])
console.log(arrBidimensional[2][1])
console.log(arrBidimensional[2][1][1])

const matriz = [
  ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
  ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
  ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
]

// console.table(matriz)

// matriz.push(["Nova linha"]) // Adicionando uma "Nova Linha" no primeiro array dentro do [matriz]
// matriz[0].push("Nova coluna")

// console.table(matriz)

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++){
    const elemento = matriz[i][j]
    console.log("Posição: (" + i + ", " + j + ") Valor: " + elemento)
  }
}