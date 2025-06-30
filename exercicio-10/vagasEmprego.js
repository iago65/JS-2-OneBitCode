//* Sistema de Vagas de Emprego
// Escreva um programa em javascript que simule um sistema de vagas de emprego, onde é possível gerenciar as vagas e adicionar candidatos às vagas. Ele deve atender aos seguintes requisitos:
// Ter um um menu onde é possível escolher entre as diferentes funcionalidades do sistemaListar vagas disponíveisCriar um nova vagaVisualizar uma vagaInscrever um candidato em uma vagaExcluir uma vagaSair
// Listar vagas disponíveis
// Criar um nova vaga
// Visualizar uma vaga
// Inscrever um candidato em uma vaga
// Excluir uma vaga
// Sair
// A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos inscritos de todas as vagas.
// A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite, e também deve pedir que o usuário confirme as informações antes de salvá-las.
// A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.
// A opção de inscrever um candidato em uma vaga de pedir o nome do candidato, o índice da vaga e então uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.
// A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.
// Este é o exercício de revisão do módulo, então aproveite para utilizar todos os recursos vistos até agora sempre que possível, como os objetos, arrays e funções.

let vagas = [
  {nome: "Vaga de exemplo", descricao: "Bla bla teste", dataLimite: "30/06/2025", candidatos: [{nome: "Roberval Teste"}]}
]

function listarVagas() {
  const vagasEmTexto = vagas.reduce((textoFinal, vaga, indice) => {
    textoFinal += indice + ". "
    textoFinal += vaga.nome
    textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
    return textoFinal
  }, "")

  alert(vagasEmTexto)
}

function criarNovaVaga() {
  const nome = prompt("Insira o nome da vaga: ")
  const descricao = prompt("Insira a descrição da vaga: ")
  const dataLimite = prompt("Insira a data limite da vaga: dd/mm/yyyy")
  const confirmacao = confirm("Deseja criar nova Vaga? ")

  if (confirmacao){
    vagas.push({nome, descricao, dataLimite, candidatos: []})
    alert("Vaga criada com sucesso. ")
  } else{
    alert("Vaga não criada. Voltando para o menu.")
  }
}

function visualizarVaga() {
  const indice = parseInt(prompt("Insira o índice da vaga: "))

  const vaga = vagas[indice]
  if (vaga) {
    let texto = "Índice: " + indice
    texto += "\nNome: " + vaga.nome
    texto += "\nDescrição: " + vaga.descricao
    texto += "\nData Limite: " + vaga.dataLimite
    texto += "\nQuantidade de Candidatos: " + vaga.candidatos.length
    texto += "\nNome dos candidatos: " +  vaga.candidatos.map(candidatos => candidatos.nome).join(", ")

    alert(texto)
  } else{
    alert("Não existe uma vaga com esse índice. Retornando ao menu!")
  }
}

function inscreverCandidato() {
  const nomeCandidato = prompt("Insira o nome do candidato: ")
  const indice = parseInt(prompt("Insira o índice da vaga que o candidato será inscrito: "))
  const vaga = vagas[indice]

  if (vaga) {
    const confirmacao = confirm("Deseja adicionar o candidato " + nomeCandidato + " a vaga de " + vaga.nome + "?")

    if (confirmacao) {
      vaga.candidatos.push({nome: nomeCandidato})
      alert("Candidato Inscrito com sucesso.")
    } else {
      alert("Inscrição cancelada.")
    }
  } else {
    alert("Vaga não encontrada.")
  }
}

function excluirVaga() {
  const indice = parseInt(prompt("Insira o índice da vaga a ser excluída: "))
  const vaga = vagas[indice]
  if (vaga) {
    let texto = "Índice: " + indice
    texto += "\nNome: " + vaga.nome
    texto += "\nDescrição: " + vaga.descricao
    texto += "\nData Limite: " + vaga.dataLimite
    texto += "\nQuantidade de Candidatos: " + vaga.candidatos.length
    texto += "\nNome dos candidatos: " +  vaga.candidatos.map(candidatos => candidatos.nome).join(", ")

    const confirmacao = confirm("Deseja excluir a vaga: " + texto + "?")
    if (confirmacao) {
      vagas.splice(indice, 1)
      alert("Vaga excluída com sucesso.")
    }else{
      alert("Exclusão cancelada. ")
    }
  } else{
    alert("Não existe uma vaga com esse índice. Retornando ao menu!")
  }
}

function exibirMenu() {
  return prompt(
    "** Sistema de Vagas de Emprego **\n\n" +
    "1. Listar vagas disponíveis\n" +
    "2. Criar uma nova vaga\n" +
    "3. Visualizar uma vaga\n" +
    "4. Inscrever um candidato em uma vaga\n" +
    "5. Excluir uma vaga\n" +
    "6. Sair"
  )
}

function executar() {
  let opcao = ""

  do {
    opcao = exibirMenu()
    
    switch (opcao) {
      case "1": 
        listarVagas()
        break
      case "2": 
        criarNovaVaga()
        break
      case "3": 
        visualizarVaga()
        break
      case "4":
        inscreverCandidato()
        break
      case "5":
        excluirVaga()
        break
    }
  } while (opcao !== "6")
}

executar()