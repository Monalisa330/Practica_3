/*Dado un número real que representa el valor total de una compra, informar
las posibles formas de pago según la siguiente tabla. Específica los datos de
entrada, de salida, estrategia.
1 cuota de $................. (0% de recargo)
2 cuotas de $................. total $................. ( 5% de recargo)
6 cuotas de $................. total $................. ( 40% de recargo)*/

let Valor_total= parseFloat(prompt("Ingrese el valor total de la compra "));

cuota_uno = Valor_total
/*el "1" representa el valor total que ingresa el usuario al preguntarle por el precio total de la compra. 
Este valor total es la base sobre la cual se calcularán las cuotas con los recargos correspondientes.*/
cuota_dos = Valor_total * (1 + 0.05);
cuota_seis = Valor_total * (1 + 0.4);

// multiplicar el valor de una cuota con recargo por 2, ya que se pagarían dos cuotas en este caso.
total_dos_cuotas = cuota_dos * 2
// multiplicar el valor de una cuota con recargo por 6, ya que se pagarían seis cuotas en este caso.
total_seis_cuotas = cuota_seis * 6

console.log("Formas de pago posibles:\n 1 cuota de $ " + cuota_uno);
console.log("2 cuotas de $ " + cuota_dos + " total con recargo de 5% $ " + total_dos_cuotas);
console.log("6 cuotas de $ " + cuota_seis + " total con recargo de 40% $ " + total_seis_cuotas);