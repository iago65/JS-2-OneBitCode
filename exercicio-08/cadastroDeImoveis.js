let imoveis = []
let imovel = {}
let menu = ""
let imoveisCadastrados = 0
let exibirImoveis = ""

do {
  menu = prompt("*** CADASTRO DE IMÓVEIS ***  \nÍmoveis cadastrados: " + imoveisCadastrados + "\n1. Salvar um ímovel\n2. Mostrar ímoveis salvos\n3. Sair")

  switch(menu){
    case "1":
      nomeProprietario = prompt("Insira o nome do proprietário do ímovel: ")
      imovel.nomeProprietario = nomeProprietario
      quantQuartos = prompt("Insira a quantidade de quartos do ímovel: ")
      imovel.quantQuartos = quantQuartos
      quantBanheiros = prompt("Insira a quantidade de banheiros no ímovel: ")
      imovel.quantBanheiros = quantBanheiros
      garagem = prompt("O ímovel possui Garagem? S/n")
      if (garagem === "S"){
        imovel.garagem = true
      }else{
        imovel.garagem = false
      }

      imoveisCadastrados += 1

      imoveisSalvos = []
      imoveisSalvos.unshift("Nome do proprietário: " + imovel.nomeProprietario + "\nQuantidade de quartos: " + imovel.quantQuartos + "\nQUantidade de banheiros: " + imovel.quantBanheiros + "\nPossui Garagem: " + imovel.garagem)
      imoveis += imoveisSalvos

      break
    case "2":
      alert("Ímoveis Salvos: ")
      for(let i = 0; i < imoveisSalvos; i++){
        exibirImoveis = (i + "° Ímovel Salvo: " + imoveis[i] + "\n")
      }
      alert(exibirImoveis)
      break
  }
} while (menu !== "3")