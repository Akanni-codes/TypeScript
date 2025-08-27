import leia = require("readline-sync");
let listNum: Set<number> = new Set<number>([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);
let num = leia.questionInt("Digite o numero que voce deseja encontrar: ");
if (listNum.has(num)) {
  console.log(
    "O numero " + num + " foi encontrado!"
  );
} else {
  console.log("O numero " + num + " não foi encontrado!");
}