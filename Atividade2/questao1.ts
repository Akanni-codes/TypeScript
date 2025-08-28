import { Queue } from "../Queue";
import leia = require("readline-sync");

const fila = new Queue<string>();
let continuar: boolean = true;
let opcao: number;
do {
  console.log("*************************************************");
  console.log("");
  console.log("      1 - Adicionar Cliente na Fila");
  console.log("      2 - Listar todos os Clientes");
  console.log("      3 - Retirar Cliente da Fila");
  console.log("      0 - Sair");
  console.log("");
  console.log("*************************************************");
  console.log("");
  console.log("Entre com a opção desejada: ");
  opcao = leia.questionInt();

  switch (opcao) {
    case 1:
      let client: string = leia.question("Nome do cliente: ");
      fila.enqueue(client);
      break;
    case 2:
      console.log("-------------------------------------");
      console.log("Pessoas arualmente na fila");
      fila.printQueue();
      break;
    case 3:
      fila.dequeue();
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
