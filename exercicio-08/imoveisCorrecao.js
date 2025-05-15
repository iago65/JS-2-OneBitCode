const imoveis = []
let opcao = ""

do {
  opcao = prompt(
    "Bem-Vindo(a) ao Cadastro de ímoveis\n" +
    "Total de Imóveis: " + imoveis.length +
    "\n\nEscolha uma opção:\n1. Novo imóvel\n2. Lista imóveis\n3. Sair"
  )

  switch (opcao) {
    case "1":
      const imovel = {}

      imovel.proprietario = prompt("Insira o nome do proprietário: ")
      imovel.quartos = prompt("Insira a quantidade de quartos: ")
      imovel.banheiro = prompt("Insira a quantidade de banheiros: ")
      imovel.garagem = prompt("O imóvel possui garagem? Sim/Não")

      const confirmacao = confirm(
        "Salvar este imóvel?\n" +
        "\nProprietário: " + imovel.proprietario +
        "\nQuartos: " + imovel.quartos +
        "\nBanheiros: " + imovel.banheiro +
        "\nPossui Garagem: " + imovel.garagem 
      )

      if (confirmacao) {
        imoveis.push(imovel)
      }

      break
    case "2":
      for(let i = 0; i < imoveis.length; i++) {
        alert(
          "Imóvel " + (i + 1) + 
          "\nProprietário: " + imoveis[i].proprietario +
          "\nQuartos: " + imoveis[i].quartos +
          "\nBanheiros: " + imoveis[i].banheiro +
          "\nPossui Garagem: " + imoveis[i].garagem
        )
      }
      break
    case "3":
      alert("Encerrando...")
      break
    default:
      alert("Opção inválida!")
  }
}while (opcao !== "3")