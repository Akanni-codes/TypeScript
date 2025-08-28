import leia = require("readline-sync");
import { Stack } from "../Stack";

const pilha = new Stack();
let continuar: boolean = true;
let opcao: number;

do {
  console.log("*************************************************");
  console.log("");
  console.log("      1 - Adicionar Cliente na Pilha");
  console.log("      2 - Listar todos os Clientes");
  console.log("      3 - Retirar Cliente da Pilha");
  console.log("      0 - Sair");
  console.log("");
  console.log("*************************************************");
  console.log("");
  console.log("Entre com a opção desejada: ");
  opcao = leia.questionInt();

  switch (opcao) {
    case 1:
      let client: string = leia.question("Nome do cliente: ");
      pilha.push(client);
      break;

    case 2:
      console.log("-------------------------------------");
      console.log("Pessoas arualmente na pilha");
      pilha.printStack();
      break;

    case 3:
      pilha.pop();
      break;

    case 0:
      continuar = false;
      break;

    default:
      console.log("Esta opção não é valida");
      break;
  }
} while (continuar);
console.log("----------Encerrando----------");
console.log("Obrigado por usar nosso sistema !!");
