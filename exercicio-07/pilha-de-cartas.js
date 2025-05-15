const baralho = []
let opcao = ""

do {
  let cartas = ""
  for (let i = 0; i < baralho.length; i++){
    cartas += baralho[i] + "\n"
  }

  opcao = prompt("CARTAS NO BARALHO ATUALMENTE:\n" + cartas + "\n OPÇÕES: \n1. Adicionar uma Carta\n2. Puxar uma carta\n3. Sair")

  switch (opcao){
    case "1":
      const adicionarCarta = prompt("Insira o nome da carta a ser adicionada: ")
      baralho.push(adicionarCarta)
      alert("Carta adicionada no topo do baralho.")
      break
    case "2":
      const puxarCarta = baralho.pop()
      if (puxarCarta) {
        alert(puxarCarta + " foi puxada do topo do baralho.")
      }else{
        alert("Não há cartas no baralho. ")
      }
      break
    case "3":
      alert("Encerrando")
      break
    default:
      alert("Opção Inválida.")
  }
} while (opcao !== "3")