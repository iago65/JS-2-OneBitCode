// Lista de Compras
// Desenvolva um sistema de lista de compras com as funcionalidades:

// Adicionar item (nome e quantidade)
// Listar todos os itens
// Remover item por nome
// Marcar item como comprado
// Exibir apenas itens não comprados
// Limpar lista completa
// Sair
// Cada item deve ser um objeto com: nome, quantidade e status (comprado/não comprado).

item = [{nome: "Referencia", quantidade: 0, status: "Não comprado"}]

function adicionarItem(){
  const nome = prompt("Insira o nome do item: ")
  const quantidade = parseInt(prompt("Insira a quantidade: "))

  item.push({nome, quantidade, status: "Não Comprado"})
  alert("Item adicionado com sucesso!")
}

function listarItem(){
  const itensListados = item.reduce((listaFinal, item, indice) => {
    listaFinal += indice + ". "
    listaFinal += item.nome + " - Quantidade: " + item.quantidade + " " +  item.status
    return listaFinal
  }, "")

  alert(itensListados)
}

function removerItem(){
  const pesquisaRemove = prompt("Pesquise o item a ser removido: ")
  const resultadoPesquisa = item.nome.indexOf(pesquisaRemove)

  if(pesquisaRemove == item.nome.includes(pesquisaRemove)){
    item.splice(resultadoPesquisa, 1)
  }
}


function exibirMenu(){
  return prompt("*** LISTA DE COMPRAS ***\n1. Adicionar item\n2. Listar todos os itens\n3. Remover item por nome\n4. Marcar item como comprado\n5. Exibir apenas itens não comprados\n6.Limpar Lista Completa\n7. Sair")
}

function executar(){
  let opcao = ""

  do{
    opcao = exibirMenu()

    switch (opcao){
      case "1":
        adicionarItem()
        break
      case "2":
        listarItem()
        break
      case "3":
        removerItem()
        break
      case "4":
        marcarItem()
        break
      case "5":
        exibirNaoComprados()
        break
      case "6":
        limparTodaLista()
        break
    }
  }while(opcao !== "7")
}

executar()