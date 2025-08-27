import question = require("readline-sync");
import leia = require("readline-sync");

let listaDeCores:string[] = new Array<string>()
for (let i = 0; i < 5; i++) {
    let cor:string = leia.question('Insira a cor desejada: ')
    listaDeCores.push(cor)
}

console.log(listaDeCores.sort())