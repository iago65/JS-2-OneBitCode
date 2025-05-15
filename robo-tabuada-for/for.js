const num = prompt("Olá eu sou o Robô de tabuada!\nDigite um número para ver a tabuada dele de 1 a 20: ");

let resultado = ""

for (let fator = 1; fator <= 20; fator++) {
  resultado += " -> " + numero + " * " + fator + " = " + (numero * fator) + "\n"
}

alert("A tabuada do número " + numero + " é:\n" + resultado)