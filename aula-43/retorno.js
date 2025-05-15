function calcularMedia(a, b) {
  const media = (a + b) / 2
  return media
}

const resultado = calcularMedia(7,2)

// console.log(resultado)

function criarProduto(nome, preco) {
  const produto = {
    nome, // isso equivale a nome:nome
    preco,
    estoque: 1
  }
  return produto
}

const notebook = criarProduto("Notebook HP ProBook i5 8GB", 2500)

// console.log(notebook)

// console.log(criarProduto("Notebook HP ProBook i5 8GB", 2500)) // cortando o caminho e nao criando a variavel notebook

function areaRetangular(base, altura){
  return base * altura
}

function areaQuadrada(lado) {
  return areaRetangular(lado, lado)
}

// console.log(areaRetangular(3,5))

// console.log(areaQuadrada(9))

function ola(){
  let texto = "..."
  texto = "Ola, mundo"
  return texto // a funcao meio que acaba de rodar ate o return
  
  console.log(texto)
}

console.log(ola())

function maiorIdade(idade){
  if (idade >= 18){
    return "Maior de idade"
  } else {
    return "Menor de idade"
  }
}

console.log(maiorIdade(29))
console.log(maiorIdade(13))