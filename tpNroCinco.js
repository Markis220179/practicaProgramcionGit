/*Métodos de Arrays

Ejercicios básicos (1-10)
1. Usar push para agregar elementos al final de un arreglo*/

const arrayExample = [7, 9, 6, 3, 12, 16];

console.log("Original", arrayExample);

const arrayCopy1 = [...arrayExample]; 

arrayCopy1.push(23);

console.log("1", arrayCopy1);


/*2. Usar shift para remover el primer elemento de un arreglo */

const arrayCopy2 = [...arrayExample];

arrayCopy2.shift();

console.log("2_", arrayCopy2);


/*3. Usar map para duplicar cada número en un arreglo */

const arrayDuplicar = arrayExample.map(array => array * 2);

console.log("3_", arrayDuplicar);
/*El método map() en JavaScript recorre cada elemento de un arreglo, uno por uno, y le aplica una 
función. Luego, devuelve un nuevo arreglo con los resultados, sin cambiar el arreglo original.*/

/*4. Usar filter para obtener números pares de un arreglo */

const numberPairArray = arrayExample.filter(array => array % 2 === 0);

console.log("4_", numberPairArray);
/*El método filter() recorre cada elemento de un arreglo y te permite filtrar (o seleccionar) solo aquellos 
elementos que cumplen con una condición que tú le digas. Al final, devuelve un nuevo arreglo 
que contiene solo los elementos que pasaron la prueba. El arreglo original no cambia.*/

/*5. Usar find para encontrar el primer número mayor que 10 */

const findMayorDiez = arrayExample.find(array => array > 10);

console.log("5_", findMayorDiez);
/*find() se usa para obtener el primer elemento que cumpla con una condición y devuelve el elemento*/

/*6. Usar slice para obtener una porción de un arreglo */

const cortaDesdeParametro = arrayExample.slice(3);
console.log("6_", cortaDesdeParametro);

/*7. Usar includes para verificar si un elemento está en el arreglo */

console.log("7_", arrayExample.includes(12));

/*8. Usar some para verificar si algún número es negativo */

const arrayNegatives = arrayExample.some(array => array < 0);

console.log("8_",arrayNegatives);
/*some() devuelve true si al menos uno de los elementos cumple la condición*/

/*9. Usar every para verificar si todos los elementos son strings */

const arrayExampleText = ['Hola', 'Mundo', 'Como', 'Estas'];

const findEvery = arrayExampleText.every(array => typeof array === 'string');

console.log("9_", findEvery);

/*10. Usar join para crear una frase a partir de un arreglo de palabras */

const textFrase = arrayExampleText.join(" ");

console.log("10_", textFrase);
/*El método join() toma todos los elementos de un arreglo y los une en un solo string, utilizando un 
separador que tú elijas (por ejemplo, una coma, un espacio, un guion, etc.) Si no le pasamos ningun separador por
defecto lo va a aseparar por comas.*/


/*Ejercicios combinados (11-20)
11. Filtrar números pares y luego duplicarlos */

const numberPairArrayDos = arrayExample.filter(array => array % 2 === 0);

const arrayDupli = numberPairArrayDos.map(array => array * 2);

console.log("11_", arrayDupli);

/*12. Encontrar el primer número mayor que 5 y verificar si es par */

const findMayorCinco = arrayExample.find(array => array > 5);

const isPair = findMayorCinco % 2 === 0;

console.log("12_", findMayorCinco); 
console.log("12 Bis_",isPair);      

/*13. Remover el primer elemento y agregarlo al final */

const arrayCopy3 = [...arrayExample];

const removeFirst = arrayCopy3.shift();

const arrayCopy4 = [...arrayCopy3];

arrayCopy4.push(removeFirst);

console.log("13 A_", arrayExample);
console.log("13 B_", arrayCopy3);
console.log("13 C_", arrayCopy4);

/*14. Filtrar strings, convertirlos a mayúsculas y unirlos */

const stringAMayuscula = arrayExampleText.map(palabra => palabra.toUpperCase());

const unirStringMayus = stringAMayuscula.join(" ");

console.log("14_", unirStringMayus);

/*15. Encontrar números mayores que 10, duplicarlos y sumar el resultado */

const numberMayorDiez = arrayExample.filter(array => array > 10);
console.log("15 A_", numberMayorDiez);

const numberMayDiezDupli = numberMayorDiez.map(array => array * 2);
console.log("15 B_", numberMayDiezDupli);

const sumaNumMayDiezDupli = numberMayDiezDupli.reduce((sumaTotal, num) => sumaTotal + num, 0 );
console.log("15 C_", sumaNumMayDiezDupli);

/*Ejemplo de otro uso de reduce
const frutas = ["manzana", "naranja", "plátano", "manzana"];

// Contamos cuántas veces aparece cada fruta
const conteoFrutas = frutas.reduce((acumulador, fruta) => {
    acumulador[fruta] = (acumulador[fruta] || 0) + 1; // Incrementamos el conteo
    return acumulador; // Retornamos el acumulador
}, {});

console.log(conteoFrutas); // { manzana: 2, naranja: 1, plátano: 1 }*/

/*16. Verificar si todos los números son positivos y luego obtener su suma */

const todosNumberPositivos = arrayExample.filter(array => array > 0);
console.log("16 A_", todosNumberPositivos);

const sumaTodosPositivos = todosNumberPositivos.reduce((sumaToatalP, numPos) => sumaToatalP + numPos, 0);
console.log("16 B", sumaTodosPositivos);

/*17. Filtrar elementos únicos y ordenarlos de mayor a menor */

const arrayExample2 = [7, 9, 7, 3, 12];

console.log("Original Bis", arrayExample2);

const elementosUnicos = arrayExample2.filter((valor, indice, arreglo) => {
    return arreglo.indexOf(valor) === indice;
    /*El método indexOf() en JavaScript se utiliza para buscar un 
    elemento específico dentro de un arreglo o cadena y devolver la posición (índice) en 
    la que se encuentra ese elemento. Si el elemento no se encuentra, devuelve -1*/
});

const ordenadosDeMayorAMenor = elementosUnicos.sort((a, b) => b - a);
/*.sort((a, b) => a - b); si queremos que sea de menor a mayor*/
console.log(ordenadosDeMayorAMenor); 


/*18. Encontrar el primer número par, triplicarlo y agregarlo al final */

const firstNumPair = arrayExample.find(array => array % 2 === 0);
console.log("18 A_", firstNumPair);

const numTripli = firstNumPair * 3;
console.log("18 B_", numTripli);

const arrayCopy5 = [...arrayExample];
arrayCopy5.push(numTripli);
console.log("18 C_", arrayCopy5); 

/*19. Filtrar números, elevarlos al cuadrado y verificar si alguno es mayor que 100 */

const arrayCopy6 = [...arrayExample];
const arrayAlCuadrado = arrayCopy6.map(array => Math.pow(array, 2));
console.log("19 A_", arrayAlCuadrado);

const hayMayorACien = arrayAlCuadrado.some(array => array > 100);
console.log("19 B_", hayMayorACien);

/*20. Remover elementos hasta encontrar un número par, luego duplicar los restantes */

const arrayCopy7 = [...arrayExample];

const index = arrayCopy7.findIndex(array => array % 2 === 0);
console.log("20 A_", index);
/* findIndex() busca el primer indice en un arreglo de lo que le pasamos por parametro*/

const arrayRemItemHasPair = arrayCopy7.splice(index);
console.log("20 B_", arrayRemItemHasPair);

const arrayDupliRest = arrayRemItemHasPair.map(array => array * 2);
console.log("20 C_", arrayDupliRest);
