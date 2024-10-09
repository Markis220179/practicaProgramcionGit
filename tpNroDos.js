//Mayor de tres números:
//1_Escribe un programa que tome tres números y determine cuál es el mayor de los tres.
let number1 = 8;
let number2 = 3;
let number3 = 5;
/*let number1, number2, number3, mayor;
number1 = parseInt(prompt("Ingrese el primer numero"));
number1 = parseInt(prompt("Ingrese el primer numero"));
number1 = parseInt(prompt("Ingrese el primer numero"));*/

if( number1 >= number2 && number1 >= number3) {
    console.log("El numero uno es mayor");
    //mayor = number1;
} else if (number2 >= number1 && number2 >= number3) {
    console.log("El numero dos es mayor");
    //mayor = number2;
}else {
    console.log("El numero tres es mayor");
    //mayor = number3;
}
//console.log("El numero mayor de los tres es:", mayor);

//Suma de elementos pares:
//2_Crea un array de números y muestre la suma de todos los números pares del array.
let num1 = 1;
let num2 = 2;
let num3 = 3;
let num4 = 4;
let sumaPares = 0;

let numbers = [ 1, 2, 3, 4];

for(let n = 0; n <= 3; n++) {
      if(numbers[n] % 2 === 0) {
        sumaPares = sumaPares + numbers[n];
      }   
}
console.log("La suma de los pares del arreglo es:", sumaPares)

//Factorial de un número:
/*3_Implementa un código que calcule el factorial de un número dado. El factorial de un número n se define como 
 el producto de todos los enteros positivos menores o iguales a n.*/
let numero = 4;
let factorial = 1; 

  for (let i = numero; i >= 1; i--) { 
      factorial *= i; 
  }


console.log(" El factorial del numero", numero + "! es:", factorial);


//Primo o no primo:
/*4_Escribe un programa que determine si un número dado es primo o no. Un número primo es aquel que es 
 divisible únicamente por sí mismo y por 1.*/

 let n = 2;
 let esPrimo = n !== 1;
 for (var i = 2; i < n; i++) {
  if (n % i === 0) {
    esPrimo = false;
  }
}

 if(esPrimo){
  console.log("El numero "+ n +" es un numero primo" )
 }else{
  console.log("El numero " + n + "  no es un numero primo")
 }

//Eliminar duplicados:
/*5_Crea un programa que tome un array y elimine todos los elementos duplicados, devolviendo un nuevo array sin
 duplicados.*/


//Contar elementos pares e impares:
/*6_Implementa un programa que tome un array de números y muestre un objeto con dos propiedades: 'pares' e
 'impares', que contengan la cantidad de números pares e impares respectivamente.
 Esta mas abajo*/
//Resuelto mas abajo
 
//Ordenar array de strings:
//7_Escribe un programa que tome un array de strings y lo ordene alfabéticamente.

let arrayString = ["Tomate", "Zapallo", "Ajo", "Morron", "Cebolla"];

for (let i = 0; i < arrayString.length - 1; i++) {
  for (let j = i + 1; j < arrayString.length; j++) {
    if (arrayString[i] > arrayString[j]) {
      const temp = arrayString[i];
     arrayString[i] = arrayString[j];
      arrayString[j] = temp;
    }
  }
}
console.log(arrayString);


//Buscar elementos en un array:
/*8_Crea un programa que tome un array y un valor, y muestre true si el valor está presente en el array y 
false si no lo está.*/

let valor = 3;

if(numbers === valor){
  console.log(valor, "está presente en el array");
}else{
  console.log(valor, " no está presente en el array");
}


//Promedio de calificaciones:
//9_Escribe un programa que tome un array de calificaciones y muestre el promedio de dichas calificaciones.
/*Sumar todos las calificaciones de un array
Recorrerlo con un for e ir sumando como el ejercicio de pares
y el resultado ponerlo en una variable usando +=
dicha variable  dividirla el tamaño del array nos dara el promedio*/

const lengua = 7;
const geografia = 8;
const matematica = 7;
const fisica = 4;
const quimica = 6;
let sumaCalificaciones = 0;
let promedioCalificaciones = 0;

const arrayCalificaciones = [lengua, geografia, matematica, fisica, quimica];

for(let c = 0; c < arrayCalificaciones.length; c++){
           sumaCalificaciones += arrayCalificaciones[c];      
          
}
promedioCalificaciones = sumaCalificaciones / arrayCalificaciones.length;
console.log("El promedio de las calificaciones es :", promedioCalificaciones.toFixed(2));

// Pensado con arreglos( Continuacion de ejercico 1)
const numeros = [500, 23, 100, 51, 1000, 30, 8, 7, 15, 5000, 78, 45];

let mayor = numeros[0];
for (let i = 1; i < numeros.length; i++) {
  if (mayor < numeros[i]) {
    mayor = numeros[i];
  }
}
console.log("El numero mayor de todos es", mayor);

/****
 * Realice un algoritmo que cuente la cantidad de valores impares que posee un array
let contadorImpares = 0;
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 != 0) {
    contadorImpares = contadorImpares + 1;
  }
}
console.log("Impares:", contadorImpares);

 */

/* Resolucion ejercico 6*/
let contadorImpares = 0;
let contadorpares =0;
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 != 0) {
    contadorImpares = contadorImpares + 1;
  }else{
    contadorpares = contadorpares +1
  }
}
console.log("La cantidad de numeros pares es:", contadorpares);
console.log("La cantidad de numeros impares es:", contadorImpares);
console.log("Morron" > "Ajo");

/***
 * Crea un programa que tome un array y coloque en un nuevo array los elementos que no se encuentren repetidos.
 */

// Encontramos una posible solucion, pero falla. Porque?. Que consideramos mal?.
// Sigan analizando el problema e intenten pensar una solucion.

const arrayConDuplicados = [1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 1, 8, 9];
const arraySinDuplicados = []; 
for (let j = 0; j < arrayConDuplicados.length; j++) {
  let estaRepetido = false;
  let datoActual = arrayConDuplicados[j];
  for (let i = 0; i < arrayConDuplicados.length; i++) {
    if (datoActual == arrayConDuplicados[i] && i != j) {
      estaRepetido = true;
    }
  }
  if (estaRepetido == false) {
    arraySinDuplicados[arraySinDuplicados.length] = datoActual;
  }
}
console.log("Arreglo menos datos duplicados:", arraySinDuplicados);




// Solucion Emmanuel
const arrayConDuplicados2 = [1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 1, 8, 9];
const arraySinDuplicados2 = []

let nroQueSeRepite = 3;

for (let j = 0; j < arrayConDuplicados2.length; j++) {
  let datoActual = arrayConDuplicados2[j]
  let dumbtest = 0;
  for (let i = 0; i < arrayConDuplicados2.length; i++) {
    if (datoActual == arrayConDuplicados2[i]) {
      dumbtest++
    }
  }
  if (dumbtest == nroQueSeRepite) {
    arraySinDuplicados2[arraySinDuplicados2.length] = datoActual
  }
}

console.log("Solucion Emmanuel:", arraySinDuplicados2)
