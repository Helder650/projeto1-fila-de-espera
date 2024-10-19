let fila = []

do {
    options = prompt(`
Escolha uma das opções abaixo:
1- Novo Paciente
2- Consultar Paciente
3- Visualizar Fila
4- Encerrar
    `)

    
switch (options) {
        case "1":
            prompt("Digite o nome do paciente")
            break
        case "2":
            alert("Você escolheu a Opção 2")
            break
        case "3":
            alert("Você escolheu a Opção 3")
            break
        case "4":
            alert("O sistema está sendo encerrado")
            break
        default:
            alert("Opção inválida. Por favor, escolha uma opção entre 1 e 5.")
            }

        } while (options !== "5")