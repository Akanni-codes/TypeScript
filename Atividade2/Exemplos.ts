import { Queue } from "../Queue";
import leia = require("readline-sync");


let lista = new Queue<string>()

let nome = leia.question('Insira um nome na fila: ')
lista.enqueue(nome)
lista.printQueue()