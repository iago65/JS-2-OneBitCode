const palavra = prompt("*** VERIFICADOR DE PALINDROMOS ***\nDigite uma palavra: ")

let palavraInvertida = ""

for (let i = palavra.length - 1; i >= 0; i--) {
  palavraInvertida += palavra[i]
}

if (palavraInvertida === palavra){
  alert("Essa palavra é um palindromo! \nPalavra: " + palavra + "\nPalavra Invertida: " + palavraInvertida)
} else {
  alert("Essa palavra não é um palindromo. \nPalavra: " + palavra + "\nPalavra Invertida: " + palavraInvertida)
}