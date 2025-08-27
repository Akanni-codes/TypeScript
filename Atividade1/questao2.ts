import leia = require("readline-sync");
let listNum: Array<number> = new Array<number>(2, 5, 1, 3, 4, 9, 7, 8, 10, 6);

// Caso queiro criar o Array em tempo real


// do {
//     listNum.push(leia.questionInt('Insira um numero: '))
// } while (listNum.length < 10);


let num = leia.questionInt("Digite o numero que voce deseja encontrar: ");
if (listNum.includes(num)) {
  console.log(
    "O numero " + num + " esta localizado na posição: " + listNum.indexOf(num)
  );
} else {
  console.log("O numero " + num + " não foi encontrado!");
}
