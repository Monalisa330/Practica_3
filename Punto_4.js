/*Un estacionamiento requiere determinar el cobro que debe aplicar a las
personas que lo utilizan. Considera que el cobro es con base en las horas
que lo disponen y que las fracciones de hora se toman como completas,
realiza el algoritmo que permita determinar el cobro.*/

let precio = parseFloat(prompt("Ingrese el precio por hora: "));
let horas = parseFloat(prompt("Ingrese las horas de estacionamiento: "));

/*La función Math.ceil() devuelve el entero mayor o igual más próximo a un número dado.
ejem : console.log(Math.ceil(0.95));
Expected output: 1*/

let horasCompletadas = Math.ceil (horas);
let total;
total = precio * horasCompletadas;

console.log("El total a pagar por las" + horasCompletadas + "horas es: $" + total );
