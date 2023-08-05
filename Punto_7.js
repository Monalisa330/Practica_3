/*Realiza un algoritmo para determinar cuánto pagará finalmente una persona
por un artículo, considerando que tiene un descuento de 20%, y debe pagar
15% de IVA (debe mostrar el precio con descuento y el precio final).*/

let total, descuento, iva;
let precio = parseFloat(prompt("Ingrese el precio del artículo: "));
descuento = precio * 0.20; //e calcula el descuento aplicando el 20% del precio ingresado. El valor del descuento se guarda en la variable descuento.
iva = (precio - descuento)  * 0.15;/*se calcula el IVA aplicando el 15% al precio con el descuento aplicado.
Restamos el descuento al precio original y luego multiplicamos el resultado por 0.15 para obtener el valor del IVA.*/
total = precio - descuento + iva;// se calcula el precio final a pagar. Restamos el descuento al precio original y luego sumamos el IVA al resultado. 

console.log("El precio con descuento es: $" + (precio - descuento ));
console.log("El descuento aplicado es: $ " + descuento);
console.log("El precio final con iva aplicado es: $" + total);
console.log("El iva aplicado es: $" + iva);//iva aplicado