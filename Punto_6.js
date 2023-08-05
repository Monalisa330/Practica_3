/*Se requiere determinar la hipotenusa de un triángulo rectángulo. ¿Cómo
sería el algoritmo para obtenerla? Recuerda que por Pitágoras se tiene que:
La hipotenusa al cuadrado es igual a la suma de los otros dos lados al
cuadrado (H2 = A2 + B2)*/

let a = parseFloat(prompt("Ingrese el cateto a: "));
let b = parseFloat(prompt("Ingrese el cateto b: "));

//Math.sqrt() es una función  que se utiliza para calcular la raíz cuadrada de un número.
//Math.sqrt(cSquared) se utiliza para obtener la raíz cuadrada del valor de (cSquared es al cuadrado)
let cSquared = a ** 2 + b ** 2;
let c = Math.sqrt(cSquared);

console.log("La hipotenusa del triángulo es: " + c );