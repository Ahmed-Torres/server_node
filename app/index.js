
const recorre = require("../modulos/recorrido")
const imprime = require("../modulos/imprimir")

const hobbies = ["correr", "nadar", "caminar"]

let algoParaImprimir = "Algo que imprimimos desde la App"
recorre.recorrerH(hobbies)
imprime.imprimirAlgo(algoParaImprimir)