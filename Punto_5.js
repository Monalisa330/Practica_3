/*Una empresa de pinturas requiere determinar cuánto cobrar por trabajos de
pintura. Considera que se cobra por m2, realiza el algoritmo que le permita ir
generando presupuestos para cada cliente.*/

let metros = parseFloat(prompt("Ingrese los metros cuadrados a pintar: "));
let precio = parseFloat(prompt("Ingrese el precio del metro cuadrado: "));
total = metros * precio
console.log("El total a pagar por " + metros + "metros cuadrados de pintura es: $" + total);
