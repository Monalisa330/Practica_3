/*Realiza un algoritmo para determinar cuánto dinero ahorra una persona en
un año si considera que cada semana ahorra 15% de su sueldo (considera
cuatro semanas por mes y que no cambia el sueldo).*/

let ahorro;
let sueldo = parseFloat(prompt("Ingrese el sueldo: "));

let ahorroSemanal = sueldo * 0.15; //multiplicando el sueldo por 0.15, que representa el 15% del sueldo.
let ahorraMensual = ahorroSemanal * 4;//multiplicando el ahorro semanal por 4, ya que hay cuatro semanas en un mes. 
ahorro = ahorraMensual * 12; // multiplicando el ahorro mensual por 12, que representa los doce meses del año. 

console.log("El ahorro semanal es: $" + ahorroSemanal);
console.log("El ahorro mensual es: $" + ahorraMensual);
console.log("El ahorro anual es: $" + ahorro);
