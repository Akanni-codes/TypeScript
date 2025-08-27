import leia = require("readline-sync");

let listaDeCores: Array<string> = new Array<string>();
for (let i = 0; i < 5; i++) {
  let cor: string = leia.question("Insira a cor desejada: ");
  listaDeCores.push(cor);
}
console.log("Listar todas as cores:");
console.log(listaDeCores);
console.log("Ordenar as cores:");
console.log(listaDeCores.sort());
