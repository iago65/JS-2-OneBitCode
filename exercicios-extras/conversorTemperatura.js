let menu = ""

function cParaf() {
  const temperaturaDeEntrada = parseFloat(prompt("Insira a temperatura em Celsius: "))
  const resultado = (temperaturaDeEntrada * 9 / 5) + 32
  alert("A conversão de C→F do valor " + temperaturaDeEntrada + "°C é " + resultado.toFixed(2) + "°F")
}

function cParak() {
  const temperaturaDeEntrada = parseFloat(prompt("Insira a temperatura em Celsius: "))
  const resultado = temperaturaDeEntrada + 273.15
  alert("A conversão de C→K do valor " + temperaturaDeEntrada + "°C é " + resultado.toFixed(2) + "K")
}

function fParac() {
  const temperaturaDeEntrada = parseFloat(prompt("Insira a temperatura em Fahrenheit: "))
  const resultado = (temperaturaDeEntrada - 32) * 5 / 9
  alert("A conversão de F→C do valor " + temperaturaDeEntrada + "°F é " + resultado.toFixed(2) + "°C")
}

function fParak() {
  const temperaturaDeEntrada = parseFloat(prompt("Insira a temperatura em Fahrenheit: "))
  const resultado = (temperaturaDeEntrada - 32) * 5 / 9 + 273.15
  alert("A conversão de F→K do valor " + temperaturaDeEntrada + "°F é " + resultado.toFixed(2) + "K")
}

function kParac() {
  const temperaturaDeEntrada = parseFloat(prompt("Insira a temperatura em Kelvin: "))
  const resultado = temperaturaDeEntrada - 273.15
  alert("A conversão de K→C do valor " + temperaturaDeEntrada + "K é " + resultado.toFixed(2) + "°C")
}

function kParaf() {
  const temperaturaDeEntrada = parseFloat(prompt("Insira a temperatura em Kelvin: "))
  const resultado = (temperaturaDeEntrada - 273.15) * 9 / 5 + 32
  alert("A conversão de K→F do valor " + temperaturaDeEntrada + "K é " + resultado.toFixed(2) + "°F")
}

do {
  menu = prompt("*** CONVERSOR DE TEMPERATURAS *** \n\n1. C→F\n2. C→K\n3. F→C\n4. F→K\n5. K→C\n6. K→F\n7. Sair")
  
  switch(menu){
    case "1":
      cParaf()
      break
    case "2":
      cParak()
      break
    case "3":
      fParac()
      break
    case "4":
      fParak()
      break
    case "5":
      kParac()
      break
    case "6":
      kParaf()
      break
    case "7":
      alert("Finalizando...")
      break
    default:
      alert("Valor não interpretado! Tente novamente")
      break
  }
  
} while (menu !== "7");