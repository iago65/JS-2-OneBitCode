function dobro(x) {
  alert("O dobro de: " + x + " é " + (x * 2))
}

// dobro(5)
// dobro(7)
// dobro()

function dizerOla(nome = "mundo") {
  alert("Olá, " + nome + "!")
}

// dizerOla("Iago")
// dizerOla()

function soma(a, b) {
  alert("O resultado da soma é " + (a + b))
}

// soma(7, 6)

function criarUsuario(nome, email, senha, tipo) {
  const usuario = {
    nome: nome,
    email,  // mesmo que nome: nome
    senha,
    tipo
  }

  console.log(usuario)
}

function muitosParametros(nome, telefone, endereco, aniversario, email, senha) {

}

function objetoComoParametro(usuario) {
  // ...
  usuario.nome
  usuario.telefone
}
muitosParametros("nome", "telefone", "endereco", "aniversario", "email", "senha")

const dadosDoUsuario = {
  nome: "", 
  telefone: "",
  email: "",
  senha: "",
  endereco: "",
  aniversario: "",
}

objetoComoParametro(dadosDoUsuario)