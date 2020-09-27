
const recorre = require("../modulos/recorrido")
const imprime = require("../modulos/imprimir")
const hobbies = ["correr", "nadar", "caminar"]
const coolimage = require("cool-images")

let algoParaImprimir = "Algo que imprimimos desde la App"
recorre.recorrerH(hobbies)
imprime.imprimirAlgo(algoParaImprimir)

let moment = require("moment")

console.log("hola mundo " + moment(new Date()).format("DD/MM/yyyy"))
console.log("CAMBIOOO")
console.log("CADA VEZ QUE SALVO EL INDEX.JS SE REFLEJA EN LA CONSOLA TAL Y COMO EN LIVE SERVER REFLEJA CAMBIOS EN EL NAVEGADOR!!!")
console.log("esto ocurre gracias a que en package.json , en scripts, en vez de node, nodemon")

let image = coolimage.many(500, 800, 10)

image.forEach(element => {
    console.log(element)
});