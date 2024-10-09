var prompt = require('prompt-sync')();
//
//  obtener información del usuario.
//
console.log(30);

var nombre = prompt('Escribe tu nombre: ');
console.log("Hola", nombre);

let edad = Number(prompt('Escribe tu edad: '));
console.log("Tu edad es:", edad);
let suma = edad + 10;
console.log(suma);

if (edad > 18) {
  console.log("Eres mayor");
}