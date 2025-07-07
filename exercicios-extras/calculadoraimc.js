// Calculadora de IMC
// Crie um programa que calcule o Índice de Massa Corporal (IMC) e classifique o resultado. O programa deve:

// Solicitar peso (kg) e altura (m)
// Calcular o IMC (peso ÷ altura²)
// Exibir a classificação:
// Abaixo de 18.5: Abaixo do peso
// 18.5 a 24.9: Peso normal
// 25.0 a 29.9: Sobrepeso
// 30.0 ou mais: Obesidade
// Perguntar se o usuário quer calcular novamente
// Usar funções para organizar o código

let peso = 0.0
let altura = 0

function perguntar(){
  peso = parseFloat(prompt("*** CALCULADORA DE IMC ***\nInsira o peso: "))
  altura = parseFloat(prompt("Insira a altura (0.00): "))
}


let resultado = 0

function areaIMC(){
  if (resultado < 18.5){
    alert("Seu IMC atual: " + resultado.toFixed(2) + "\nClassificação: Abaixo do peso (menor que 18.5)")
  } else if(resultado <= 24.9){
    alert("Seu IMC atual: " + resultado.toFixed(2) + "\nClassificação: Peso normal (18.5 a 24.9)")
  } else if(resultado <= 29.9){
    alert("Seu IMC atual: " + resultado.toFixed(2) + "\nClassificação: Sobrepeso (25.0 a 29.9)")
  } else if (resultado >= 30){
    alert("Seu IMC atual: " + resultado.toFixed(2) + "\nClassificação: Obesidade (30.0 ou mais)")
  }
}

function calcularIMC(){
  resultado = (peso / (altura * altura))
  areaIMC()
}

perguntar()
calcularIMC()

let confirmacao = true
do {
  confirmacao = confirm("Deseja realizar o cálculo novamente? ")
  if (confirmacao){
    perguntar()
    calcularIMC() 
  }
} while (confirmacao === true);




