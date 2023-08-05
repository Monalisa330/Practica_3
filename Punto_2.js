/* Conversión USD 
Una empresa importadora desea determinar cuántos dólares puede adquirir
con determina cantidad de pesos. Realiza el algoritmo para tal fin*/

let peso = parseFloat(prompt("Escribe una cantidad en pesos: "));
let dolar = parseFloat(prompt("Escribe el precio del dolar: "));

//Se realiza la conversion de pesos a dolares
let conversion = peso / dolar;

console.log("La conversión de " + peso + " pesos convertidos a dólares es: " + conversion);