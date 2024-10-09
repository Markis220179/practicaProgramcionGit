/*Ejercicios: Nivel 3*/

/*1. Modifique la función userIdGenerator. Declare un nombre de función userIdGenera-
tedByUser. No toma ningún parámetro pero toma dos entradas usando prompt().
Una de las entradas es la cantidad de caracteres y la segunda entrada es la canti-
dad de ID que se supone que se generarán.

userIdGeneratedByUser()
'kcsy2
SMFYb
bWmeq
ZXOYh
2Rgxf
'
userIdGeneratedByUser()
'1GCSgPLMaBAVQZ26
YD7eFwNQKNs7qXaT
ycArC5yrRupyG00S
UbGxOFI7UXSWAyKN
dIV0SSUTgAdKwStr'*/ 

var prompt = require('prompt-sync')();
/****
 * Modifique la función userIdGenerator. Declare un nombre de función userIdGenera-
tedByUser. No toma ningún parámetro pero toma dos entradas usando prompt().
Una de las entradas es la cantidad de caracteres y la segunda entrada es la canti-
dad de ID que se supone que se generarán.
 * 
 */
console.log("1_")

function userIdGenerator(cantChar){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^*(){}[]';
    let id = '';
    for (let i = 0; i < cantChar; i++) {
      let index = Math.floor(Math.random() * characters.length);
      id += characters[index];
      // id += characters[Math.floor(Math.random() * characters.length)];
    }
    return id;
  }
  
  
  function userIdGeneratedByUser(cantCharID, cantIDs){
    cantCharID = parseInt(prompt("Ingrese la cantidad de caracteres:  "));
    cantIDs = parseInt(prompt("Ingrese la cantidad IDs que desea crear:  "));
    
    let arrayIDs = [];
    for (let i = 0; i < cantIDs; i++) {
      arrayIDs[i] = userIdGenerator(cantCharID);
      // arrayIDs.push(userIdGenerator(cantCharID));
    }
    return arrayIDs;
  }
  
    // userIdGenerator(20);
  console.log(userIdGeneratedByUser());

/*2. Escribe un nombre de función rgbColorGenerator y genera colores rgb.
rgbColorGenerator()
rgb(125,244,255)*/

function rgbColorGenerator(){

  let red = Math.floor((Math.random() * 255));

  let green = Math.floor((Math.random() * 255));

  let blue = Math.floor((Math.random() * 255));

  return  'rgb(' + red + ', ' + green + ', ' + blue + ')'
}
let colorRgbRandom = rgbColorGenerator();
console.log("2_ El color generado es:", colorRgbRandom);

/*3. Escriba una función arrayOfHexaColors que devuelva cualquier cantidad de colores
hexadecimales en una arreglo.*/ 

let caracteresHexa = '0123456789ABCDEF';

function generarColorHexadecimal() {
  let color = '#'; 
  
  for (let i = 0; i < 6; i++) {
      let randomIndex = Math.floor(Math.random() * caracteresHexa.length); 
      color += caracteresHexa[randomIndex]; 
  }

  return color; 
}

function arrayOfHexaColors(cantidad) {
  let coloresHexa = []; 

  for (let i = 0; i < cantidad; i++) {
      coloresHexa.push(generarColorHexadecimal());
  }

  return coloresHexa; 
}

let coloresAleatoriosHexa = arrayOfHexaColors(5);
console.log("3_", coloresAleatoriosHexa); 

/*4. Escriba una función arrayOfRgbColors que devuelva cualquier cantidad de colores
RGB en una arreglo.*/

function arrayOfRgbColors(cant){
  
  let coloresRgb = []; 

  for (let i = 0; i < cant; i++) {
      coloresRgb.push(rgbColorGenerator());
  }

  return coloresRgb
}

let coloresAleatoriosRgb = arrayOfRgbColors(4);
console.log("4_", coloresAleatoriosRgb); 

/*5. Escriba una función convertHexaToRgb que convierta el color hexa a rgb y devuelva
un color rgb.*/

/*function convertHexaToRgb(hexa){
let r;
let g;
let b

  return  'rgb(' + r + ', ' + g + ', ' + b + ')'
} 

let colorRgb = convertHexaToRgb('#1A2B3C');
console.log("5_", colorRgb);*/

/*6. Escriba una función convertRgbToHexa que convierta rgb a color hexa y devuelva
un color hexa.*/

/*function convertRgbToHexa(rgb){
let color = '#';

  return  color;
}

let colorHexa = convertRgbToHexa();
console.log("6_", colorHexa);*/
/*7. Escriba una función generateColors que pueda generar cualquier número de colores
hexa o rgb.
console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55',
'#eb3d2b']
console.log(generateColors('hexa', 1)) // '#b334ef'
console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)',
'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'*/

function generateColors(colorType, cantOfColors){

  let arrayOfColors = [];
  
    if(colorType === 'rgb'){
         arrayOfColors.push(arrayOfRgbColors(cantOfColors));
    }else if(colorType === 'hexa'){
       arrayOfColors.push(arrayOfHexaColors(cantOfColors))  
   }
  
  return arrayOfColors;
}

let colores = generateColors('rgb', 4);
console.log("7_", colores);
/*8. Llame a su función shuffleArray, toma una arreglo como parámetro y devuelve una
arreglo mezclada*/

function shuffleArray(array){
  
 let  arrayMixed = [];

 return arrayMixed;
}

let arrayMezclado = shuffleArray([1, 2, 3, 4]);
console.log("8_", arrayMezclado);
/*9. Llame a su función factorial, toma un número entero como parámetro y devuelve un
factorial del número*/

function factorial(num) {
  let numFact = 1; 

  for (let i = num; i >= 1; i--) { 
      numFact *= i; 
  }

  console.log("El factorial de", num + "! es:", numFact);
}

factorial(4);


/*10. Llame a su función isEmpty, toma un parámetro y verifica si está vacío o no */

function isEmpty(value) {
  // 1. Verificar si el valor es null o undefined
  if (value === null || value === undefined) {
      return true;
  }

  // 2. Verificar si el valor es una cadena de texto vacía
  if (typeof value === 'string') {
      // Si es una cadena, iteramos manualmente para ver si tiene caracteres
      for (let i = 0; i < value.length; i++) {
          return false; // Si encontramos al menos un carácter, no está vacía
      }
      return true; // Si no encontramos caracteres, está vacía
  }

  // 3. Verificar si es un arreglo vacío (sin usar métodos)
  if (Array.isArray(value)) {
      // Si es un arreglo, iteramos para ver si tiene elementos
      for (let i = 0; i < value.length; i++) {
          return false; // Si encontramos al menos un elemento, no está vacío
      }
      return true; // Si no encontramos elementos, está vacío
  }

  // 4. Verificar si es un objeto vacío
  if (typeof value === 'object') {
      // Para verificar manualmente si un objeto está vacío, necesitamos
      // iterar sobre sus propiedades
      for (let key in value) {
          if (value.hasOwnProperty(key)) {
              return false; 
          }
      }
      return true; 
  }

  if (typeof value === 'number') {
      return value === 0;
  }

  return false;
}
 console.log("10_", isEmpty());
/*11. Llame a su función suma, toma cualquier cantidad de argumentos y devuelve la
suma.*/

function suma(...params) {
  console.log(params);
  let suma = 0;
  for (let i = 0; i < params.length; i++){
    suma += params[i];
  }
  console.log("11_La suma de los parametros es:", suma)
}

suma(1, 2, 3, 4);

/*12. Escriba una función llamada sumOfArrayItems, toma un parámetro de arreglo y de-
vuelve la suma de todos los elementos. Compruebe si todos los elementos de la
arreglo son tipos de números. Si no, dé una respuesta razonable.*/

function sumOfArrayItems(array){

  for(let i = 0; i < array.length; i++){
    if(array[i] === 'number'){
      
    }

  }
}

/*13. Escriba una función llamada promedio, toma un parámetro de arreglo y devuelve el
promedio de los elementos. Compruebe si todos los elementos de la arreglo son ti-
pos de números. Si no, dé una respuesta razonable.*/

/*14. Escriba una función llamada modifyArray que tome la arreglo como parámetro y mo-
difique el quinto elemento de la arreglo y devuelva la arreglo. Si la longitud de la
arreglo es inferior a cinco, devuelve 'elemento no encontrado'.
console.log(modifyArray(['Aguacate', 'Tomate', 'Patata','Mango',
'Limón','Zanahoria']);
['Aguacate', 'Tomate', 'Papa', 'Mango', 'LIMÓN', 'Zanahoria']
console.log(modifyArray(['Google', 'Facebook','Apple',
'Amazon','Microsoft', 'IBM']);
['Google', 'Facebook', 'Apple', 'Amazon', 'MICROSOFT', 'IBM']
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
'Extraviado'*/ 

/*15. Escribe una función llamada isPrime, que verifique si un número es un número
primo.*/

/*16. Escriba una función que verifique si todos los elementos son únicos en la arreglo.*/

/*17. Escriba una función que verifique si todos los elementos de la arreglo son del mismo
tipo de datos.*/

/*18. El nombre de la variable de JavaScript no admite caracteres o símbolos especiales,
excepto $ o _. Escriba una función isValidVariable que verifique si una variable es
una variable válida o no válida.*/

/*19. Escriba una función que devuelva una arreglo de siete números aleatorios en un
rango de 0-9. Todos los números deben ser únicos.
sevenRandomNumbers()
[1, 4, 5, 7, 9, 8, 0]*/

/*20. Escriba una función llamada reverseCountries, toma la arreglo de países y primero
copia la arreglo y devuelve el reverso de la arreglo original*/

function reverseCountries(array) {
    let reversedArray = new Array(array.length);
    
    for (let i = 0; i < array.length; i++) {
        reversedArray[i] = array[array.length - 1 - i];
    }

    return reversedArray; 
}
let arrayCountries = ['Colombia', 'Brazil', 'Argentina'];
let arrayInvertido = reverseCountries(arrayCountries);

console.log("20_El array original es:", arrayCountries)
console.log("y el array invertido seria: ",arrayInvertido)