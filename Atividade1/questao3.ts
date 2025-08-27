import readlinesync = require("readline-sync");

let listaNum: Set<number> = new Set<number>();

do {
  let num: number = readlinesync.questionInt("Insira o Valor desejado: ");
  listaNum.add(num);
} while (listaNum.size < 10);

console.log(listaNum);
