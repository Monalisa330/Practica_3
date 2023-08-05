## 1. ¿Qué es una Variable?

Una variable en JavaScript es un contenedor para almacenar valores. Pueden contener datos como números, cadenas de texto, objetos y otros tipos de información. En JavaScript, se pueden declarar variables utilizando las palabras clave `var`, `let` y `const`.
Ejemplo:

let edad = 25;
const nombre = "Juan";
var esMayor = true;

## ¿Qué es una Condición?

Una condición en JavaScript es una expresión que evalúa si es verdadera o falsa. Se utilizan para controlar el flujo de un programa y tomar decisiones basadas en ciertas condiciones. Las estructuras de control de flujo como `if`, `else`, `else if` y `switch` se utilizan para implementar condiciones en JavaScript.

Ejmeplo:
let numero = 10;

if (numero > 0) {
  console.log("El número es positivo.");
} else if (numero < 0) {
  console.log("El número es negativo.");
} else {
  console.log("El número es cero.");
}

## ¿Qué es una Estructura de datos?

Una estructura de datos en JavaScript es una forma de organizar y almacenar datos de manera eficiente. Algunas estructuras de datos comunes en JavaScript incluyen arreglos, objetos, conjuntos y mapas. Estas estructuras permiten organizar y manipular datos de diferentes maneras para resolver problemas específicos.

Ejmeplo:
// Arreglo
let numeros = [1, 2, 3, 4, 5];

// Objeto
let persona = {
  nombre: "Ana",
  edad: 30,
  profesion: "Ingeniera"
};

## ¿Qué es la Consola?

La consola en JavaScript es una herramienta que permite imprimir mensajes y depurar código. Es una interfaz de texto donde se muestran mensajes, errores y resultados durante la ejecución de un programa. Los desarrolladores utilizan la consola para verificar el estado de las variables, rastrear problemas y probar su código.

Ejmeplo:
console.log("Este es un mensaje en la consola.");

## ¿Qué es una Entrada?

En JavaScript, una entrada se refiere a los datos que un programa recibe del usuario o de otras fuentes externas. Puede ser proporcionada a través de la interfaz de usuario, como texto ingresado en un campo de formulario, o a través de archivos, conexiones de red, etc.

Ejmeplo:
let nombre = prompt("Ingresa tu nombre:");
console.log("Hola, " + nombre + ". Bienvenido.");

## ¿Qué es una Salida?

Una salida en JavaScript es el resultado que un programa produce. Puede ser mostrada al usuario en la interfaz de usuario, escrita en un archivo o enviada a través de una conexión de red. La salida representa el resultado del procesamiento de los datos de entrada por parte del programa.

Ejmeplo:
let resultado = 10 + 20;
console.log("El resultado es: " + resultado);


## ¿Qué es un Proceso?

En JavaScript, un proceso es una instancia de un programa en ejecución. Cada vez que un programa se ejecuta, se crea un proceso que contiene el código del programa y los datos utilizados en su ejecución. Los procesos son administrados por el sistema operativo y el tiempo de ejecución, y se ejecutan en el contexto del entorno de ejecución de JavaScript, como el navegador o Node.js.

Ejmeplo:
function suma(a, b) {
  return a + b;
}

let resultado = suma(5, 3);
console.log("El resultado es: " + resultado);


## ¿Cuál es la estructura de un algoritmo?

Un algoritmo es una secuencia de pasos bien definidos y ordenados que resuelven un problema o realizan una tarea específica. La estructura básica de un algoritmo generalmente sigue el siguiente esquema:

1. Inicio: Representa el punto de inicio del algoritmo.
2. Entrada: Aquí se obtienen los datos o información necesarios para resolver el problema.
3. Proceso: Pasos y operaciones que manipulan los datos de entrada para producir una salida.
4. Salida: Representa el resultado o solución del problema.
5. Fin: Representa el punto de finalización del algoritmo.

## Características de un Algoritmo

Las características clave de un algoritmo son:

- **Precisión:** Los pasos deben ser claros y precisos, sin ambigüedad.
- **Determinismo:** Cada paso debe tener un resultado definido y predecible.
- **Finitud:** El algoritmo debe terminar después de un número finito de pasos.
- **Eficiencia:** Debe ser eficiente en tiempo y recursos utilizados.
- **Generalidad:** Debe resolver el problema para todas las entradas válidas.
- **Correctitud:** Debe producir la salida correcta para todas las entradas válidas.

## ¿Cuáles consolas usamos en programación?

En programación, se utilizan varias consolas para interactuar con el código y obtener información relevante durante la ejecución. Algunas de las consolas más comunes son:

- **Consola del navegador:** Utilizada para mostrar mensajes y errores en el navegador web. Se accede mediante `console.log()` para mensajes de depuración y `console.error()` para mensajes de error.

- **Consola de Node.js:** Utilizada para mostrar mensajes y errores cuando se ejecuta código JavaScript en el entorno de Node.js. También se accede mediante `console.log()` y `console.error()`.

- **Consola del sistema:** En algunos lenguajes, como Python, se utiliza `print()` para mostrar mensajes en la consola del sistema.

## ¿Cuál es el ciclo de vida de una variable?

El ciclo de vida de una variable se refiere a su existencia y disponibilidad en la memoria durante la ejecución de un programa. En JavaScript, las variables tienen diferentes alcances y ciclos de vida según cómo se declaran:

- **Variables globales:** Tienen un ciclo de vida que abarca todo el programa y están disponibles desde su declaración hasta el final de la ejecución.

- **Variables locales:** Tienen un ciclo de vida que depende del alcance en el que se declaran. Se crean cuando se entra en un bloque de código y se eliminan cuando se sale de ese bloque.

- **Variables de bloque (let y const):** Tienen un ciclo de vida que abarca solo el bloque en el que se declaran y se eliminan cuando se sale de ese bloque.

