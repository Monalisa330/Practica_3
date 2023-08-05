// Algoritmo para obtenga el área de un triángulo.

//Se convierte en un entero(con parseInt) y luego se solicita(con prompt) que ingrese la base y altura del triángulo

let base = parseInt(prompt("Ingrese la base del triángulo: "));
let altura = parseInt(prompt("Ingrese la altura del triángulo: "));
let area;
area = (base * altura) / 2;
//se concatena con la variable area
console.log("El área del triángulo es: " + area + " cm²") //se pone al cuadrado con alt + 253
