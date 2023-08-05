/*Realiza el algoritmo para determinar el promedio que obtendrá un alumno,
considerando que realiza tres exámenes, de los cuales el primero y el
segundo tienen una ponderación de 25%, mientras que el tercero de 50%.*/

let exam_uno = parseFloat(prompt("Ingrese la calificación del primer exámen: "));
let exam_dos = parseFloat(prompt("Ingrese la calificación del segundo exámen: "));
let exam_tres = parseFloat(prompt("Ingrese la calificación del tercer exámen: "));

//la ponderación se aplica porque los exámenes tienen diferentes niveles de importancia para el resultado final.
let ponderacion_uno = exam_uno * 0.25;
let ponderacion_dos = exam_dos * 0.25;
let ponderacion_tres = exam_tres * 0.50;

let promedio_final = ponderacion_uno + ponderacion_dos + ponderacion_tres;

console.log("El 25 % del exámen uno es: " + ponderacion_uno);
console.log("El 25 % del exámen dos es: " + ponderacion_dos);
console.log("El 50 % del exámen tres es: " + ponderacion_tres);
console.log("El promedio final es: " + promedio_final);
