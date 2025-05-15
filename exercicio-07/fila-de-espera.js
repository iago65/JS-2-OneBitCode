const fila = []
let opcao = ""

do {
  let pacientes = ""
  for (let i = 0;i < fila.length; i++){
    pacientes += (i + 1) + "° - " + fila[i] + "\n"
  }

  opcao = prompt("** FILA DE ESPERA **\nFILA ATUAL: \n" + pacientes + "\nO que deseja: \n1. Novo Paciente\n2. Consultar Paciente\n3. Sair")

  switch (opcao){
    case "1":
      const novoPaciente = prompt("Insira o nome do paciente a ser adicionado: ")
      fila.push(novoPaciente)
      break
    case "2":
      const pacienteConsultado = fila.shift()
      if (pacienteConsultado){
        alert(pacienteConsultado + " foi consultado.")
      } else {
        alert("Não há pacientes na fila! ")
      }
      
      break
    case "3":
      alert("Encerrando...")
      break
    default:
      alert("Opção Inválida.")
  }
}while(opcao !== "3")



