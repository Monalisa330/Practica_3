/*Una empresa desea determinar el monto de un cheque que debe
proporcionar a uno de sus empleados que tendrá que viajar durante un
determinado número de días. Los gastos que cubre la empresa son: hotel,
comida y 200 pesos diarios para otros gastos. El monto debe estar
desglosado para cada concepto. Realiza un algoritmo que determine el
monto del cheque.*/

let dias = parseInt(prompt("Ingrese el número de días que va a viajar: "));
let gastos_hotel = parseFloat(prompt("Ingrese el valor del hotel por día: "));
let gastos_comida = parseFloat(prompt("Ingrese el gasto de comida diario: "));

/*Esta línea calcula el monto total del cheque para el empleado. Multiplica el costo del hotel por día (gastos_hotel * dias),
 el gasto diario en comida (gastos_comida * dias), y suma los gastos adicionales de otros gastos por día (dias * 200). 
 El resultado se almacena en la variable total.*/
 
total = (gastos_hotel*dias)+(gastos_comida*dias)+(dias*200);

console.log("El total de dinero para comida es: $" + gastos_comida * dias);
console.log("El total de dinero para el hotel es: $" + gastos_hotel * dias);
console.log("El total de dinero para otros gastos es: $" + dias * 200);
console.log("El dinero total por el viaje es :"+ total); 
