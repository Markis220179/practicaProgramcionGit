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
function convertHexaToRgb(hexa){
  let r = hexa[1] + hexa[2];
  let g = hexa[3] + hexa[4];
  let b = hexa[5] + hexa[6];

  function convRgb(param){
    return parseInt(param, 16);
  }

  return  'rgb(' + convRgb(r) + ', ' + convRgb(g) + ', ' + convRgb(b) + ')'
} 

let colorRgb = convertHexaToRgb('#2980b9');
console.log("5_", colorRgb);

/*6. Escriba una función convertRgbToHexa que convierta rgb a color hexa y devuelva
un color hexa.*/

function convertRgbToHexa(r, g, b){

  function convHexa(param){
    let hex = param.toString(16);
      return hex.length < 2 ? "0" + hex : hex;
  }

  return  '#' + convHexa(r) + convHexa(g) + convHexa(b);
}

let colorHexa = convertRgbToHexa(41, 128, 185);
console.log("6_", colorHexa);

/*7. Escriba una función generateColors que pueda generar cualquier número de colores
hexa o rgb.
console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55',
'#eb3d2b']
console.log(generateColors('hexa', 1)) // '#b334ef'
console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)',
'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'*/

function generateColors(colorType, cantOfColors){

  let arrayOfColors;
  
    if(colorType === 'rgb'){
         arrayOfColors = arrayOfRgbColors(cantOfColors);
    }else if(colorType === 'hexa'){
       arrayOfColors = arrayOfHexaColors(cantOfColors);  
   }
  
  return arrayOfColors;
}

let colores1 = generateColors('rgb', 3);
console.log("7_", colores1);

let colores2 = generateColors('hexa', 2);
console.log("7 Bis_", colores2);
/*8. Llame a su función shuffleArray, toma una arreglo como parámetro y devuelve una
arreglo mezclado*/

function shuffleArray(array){
  
 let  arrayMixed = [array.length];

 for(let i = 0; i < array.length; i++){
  arrayMixed[i] = array[i];
 }

for (let i = arrayMixed.length - 1; i > 0; i--) {
   
    const randomIndex = Math.floor(Math.random() * (i + 1));

    const temp = arrayMixed[i];
    arrayMixed[i] = arrayMixed[randomIndex];
    arrayMixed[randomIndex] = temp;
  }
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

  console.log("9_El factorial de", num + "! es:", numFact);
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
              return false; // Si encontramos al menos una propiedad, no está vacío
          }
      }
      return true; // Si no encontramos propiedades, está vacío
  }

  // 5. Verificar si es el número 0
  if (typeof value === 'number') {
      return value === 0;
  }

  // 6. Cualquier otro tipo de dato (booleanos, funciones, etc.) no lo consideraremos "vacío"
  return false;
}

// Pruebas           
console.log("10_", isEmpty([1, 2, 3]));       // false
console.log("10 Bis_", isEmpty(42));              // false



/*11. Llame a su función suma, toma cualquier cantidad de argumentos y devuelve la
suma.*/

function suma(...params) {

  let suma = 0;
  for (let i = 0; i < params.length; i++){
    suma += params[i];
  }
  console.log("11_La suma de los parametros es:", suma)
}

suma(1, 2, 3, 4, 5);

/*12. Escriba una función llamada sumOfArrayItems, toma un parámetro de arreglo y de-
vuelve la suma de todos los elementos. Compruebe si todos los elementos de la
arreglo son tipos de números. Si no, dé una respuesta razonable.*/

function sumOfArrayItems(array) {
  let sumaItems = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
      sumaItems += array[i];
    } else {
      console.log("12_ No se puede sumar porque no todos los elementos son números");
      return;  
    }
  }
  console.log("12 Bis_ La suma de todos los elementos del arreglo es:", sumaItems);
}

sumOfArrayItems([1, 2, 3, 4, 5, 6]);  
sumOfArrayItems([1, 2, 'a', 4, 5]);  

/*13. Escriba una función llamada promedio, toma un parámetro de arreglo y devuelve el
promedio de los elementos. Compruebe si todos los elementos de la arreglo son ti-
pos de números. Si no, dé una respuesta razonable.*/

function promedio(array) {
  let sumaItems = 0;
  let promedioItems = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
      sumaItems += array[i];
      promedioItems = sumaItems / array.length;
    } else {
      console.log("13 Bis_ No se puede sacar el promedio porque no todos los elementos son números");
      return;  
    }
  }
  console.log("13_ El promedio de todos los elementos del arreglo es:", promedioItems);
}

promedio([7, 8, 10, 3, 12]);  
promedio([7, 8, 10, 'b', 12]);  
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

function modifyArray(array) {
  
  if (array.length < 5) {
    return "14 Bis_Elemento no encontrado";
  }

  let resultado = '';
  let quintoElemento = array[4];

  for (let i = 0; i < quintoElemento.length; i++) {
    let charCode = quintoElemento.charCodeAt(i);
    // Verifica si es una letra minúscula (a-z)
    if (charCode >= 97 && charCode <= 122) {
      // Convierte a mayúsculas restando 32
      resultado += String.fromCharCode(charCode - 32);
    } else {
      // Si no es minúscula, añade el carácter tal como está
      resultado += quintoElemento[i];
    }
  }

  // Reemplazar el quinto elemento con el resultado en mayúsculas
  array[4] = resultado;

  return array;
}

console.log(modifyArray(['Aguacate', 'Tomate', 'Patata', 'Mango', 'Limón', 'Zanahoria']));
// Resultado: ['Aguacate', 'Tomate', 'Patata', 'Mango', 'LIMÓN', 'Zanahoria']

console.log(modifyArray(['Google', 'Facebook', 'Apple', 'Amazon']));
// Resultado: 14 Bis_Elemento no encontrado

/*15. Escribe una función llamada isPrime, que verifique si un número es un número
primo.*/

function isPrime(numero){

  let n = numero;
  let esPrimo = n !== 1;
  for (var i = 2; i < n; i++) {
   if (n % i === 0) {
     esPrimo = false;
   }
 }
 
  if(esPrimo){
   console.log("15_El numero "+ n +" es un numero primo" )
  }else{
   console.log("15 Bis_El numero " + n + "  no es un numero primo")
  }
 

}

isPrime(2);
isPrime(9);
/*16. Escriba una función que verifique si todos los elementos son únicos en la arreglo.*/

function sonElementosUnicos(array) {

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
     
      if (array[i] === array[j]) {
        return false;
      }
    }
  }
 
  return true;
}

console.log("16_", sonElementosUnicos(['a', 'b', 'c', 'd'])); 
console.log("16 Bis_", sonElementosUnicos(['a', 'b', 'a', 'd']));  

/*17. Escriba una función que verifique si todos los elementos de la arreglo son del mismo
tipo de datos.*/

function elementsDataType(array){
  
    const primerTipo = typeof array[0];
    
    for (let i = 1; i < array.length; i++) {
       
        if (typeof array[i] !== primerTipo) {
            return false;
        }
    }
    
  
    return true;
}

console.log("17_", elementsDataType([1, 2, 3, 4]));
console.log("17 Bis_", elementsDataType([1, '2', 3, 4])); 

/*18. El nombre de la variable de JavaScript no admite caracteres o símbolos especiales,
excepto $ o _. Escriba una función isValidVariable que verifique si una variable es
una variable válida o no válida.*/

function isValidVariable(variable) {

  if (variable[0] >= '0' && variable[0] <= '9') {
    return 'La variable no es válida';
  }

  for (let i = 0; i < variable.length; i++) {
    const char = variable[i];
   
    if (
      !(char >= 'a' && char <= 'z') && 
      !(char >= 'A' && char <= 'Z') && 
      !(char >= '0' && char <= '9') && 
      char !== '$' &&                  
      char !== '_'                    
    ) {
      return 'La variable no es válida';
    }
  }

  return 'La variable es válida';
}

let variable1 = isValidVariable('pe-dro');
let variable2 = isValidVariable('juan');


console.log("18_", variable1); 
console.log("18 Bis_", variable2); 

/*19. Escriba una función que devuelva una arreglo de siete números aleatorios en un
rango de 0-9. Todos los números deben ser únicos.
sevenRandomNumbers()
[1, 4, 5, 7, 9, 8, 0]*/

function sevenRandomNumbers() {
  let arraySevenNum = [];

  while (arraySevenNum.length < 7) {
    let num = Math.floor(Math.random() * 10);
    let isUnique = true;

   
    for (let i = 0; i < arraySevenNum.length; i++) {
      if (arraySevenNum[i] === num) {
        isUnique = false; 
        break;
      }
    }
    
    if (isUnique) {
      arraySevenNum.push(num);
    }
  }

  return arraySevenNum;
}

console.log("19_", sevenRandomNumbers());


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