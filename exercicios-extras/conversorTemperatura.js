// Escreva um programa que converta temperaturas entre Celsius, Fahrenheit e Kelvin. O programa deve:

// Exibir um menu com as opções de conversão (C→F, C→K, F→C, F→K, K→C, K→F, Sair)
// Solicitar a temperatura de entrada
// Calcular e exibir o resultado
// Usar funções para cada tipo de conversão
// Repetir até o usuário escolher "Sair"
// Fórmulas:

// C para F: (C × 9/5) + 32
// C para K: C + 273.15
// F para C: (F - 32) × 5/9
// K para C: K - 273.15

let menu = ""

do {
  menu = prompt("*** CONVERSOR DE TEMPERATURAS *** \n\n1. C→F\n2. C→K\n3. F→C\n4. F→K\n 5. K→C\n6. K→F\n7. Sair")

  const temperaturaDeEntrada = parseInt(prompt("Insira a temperatura de entrada (Somente o número): "))

  
} while (menu != "7");