// Escreva um programa em javascript para calcular a área de diferentes formas geométricas. O programa deve iniciar com um menu contendo as diferentes opções de cálculas. As opções devem ser:
// área do triângulo: base * altura / 2
// área do retângulo: base * altura
// área do quadrado: lado²
// área do trapézio: (base maior + base menor) * altura / 2
// área do círculo: pi * raio² (considere pi = 3.14)
// Você deve escrever o programa usando funções sempre que possível para separar os procedimentos. O programa também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu.

let menu = ""
let resultado = 0

function areaTriangulo(base, altura) {
  base = parseFloat(prompt("Insira a base: "))
  altura = parseFloat(prompt("Insira a altura: "))

  resultado = base * altura / 2
  alert("A área do Triângulo é " + resultado)
}

function areaRetangulo(base, altura) {
  base = parseFloat(prompt("Insira a base: "))
  altura = parseFloat(prompt("Insira a altura: "))

  resultado = base * altura
  alert("A área do Retângulo é " + resultado)
}

function areaQuadrado(lado) {
  lado = parseFloat(prompt("Insira o valor do lado: "))

  resultado = lado * lado
  alert("A área do quadrado é " + resultado)
}

function areaTrapezio(baseMaior, baseMenor, altura){
  baseMaior = parseFloat(prompt("Insira o valor de base maior: "))
  baseMenor = parseFloat(prompt("Insira o valor de base menor: "))
  altura = parseFloat(prompt("Insira o valor da altura: "))

  resultado = (baseMaior + baseMenor) * altura / 2
  alert("A área do trapézio é " + resultado)
}

function areaCirculo(raio){
  raio = parseFloat(prompt("Insira o valor do raio do círculo: "))

  resultado = 3.14 * (raio * raio)
  alert("A área do círculo é " + resultado)
}

do {
  menu = prompt("CALCULADORA GEOMÉTRICA\nEscolha uma operação:\n\n1. Área do triângulo\n2. Área do retângulo\n3.Área do quadrado\n4. Área do trapézio\n5. Área do círculo\n6. Sair")

  switch (menu){
    case "1":
      areaTriangulo()
      break
    case "2": 
      areaRetangulo()
      break
    case "3":
      areaQuadrado()
      break
    case "4":
      areaTrapezio()
      break
    case "5":
      areaCirculo()
      break
    case "6":
      alert("Encerrando...")
      break
    default:
      alert("Valor inválido")
  }
}while (menu !== "6")