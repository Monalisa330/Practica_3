/*Una empresa que contrata personal requiere determinar la edad de las
personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo
se les pregunta el año en que nacieron. Realiza el algoritmo para solucionar
este problema.*/

//Se convierte en un entero(con parseInt) y luego se solicita(con prompt) que ingrese su nacimiento y año actual

//Se define como const, el año de nacimiento y la edad no cambian una vez que se han ingresado y calculado respectivamente.
 const anioNacimiento = parseInt(prompt("Ingrese su año de nacimiento : "));
 const anioActual = parseInt(prompt("Ingrese el año actual: "));

 const edad = anioActual - anioNacimiento
 console.log("Tu edad actual es: " +  edad);