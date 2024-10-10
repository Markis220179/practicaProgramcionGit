/*Ejercicios: Nivel 2
Resuelva sin utilizar métodos de array.
1. La ecuación lineal se calcula de la siguiente manera: ax + by + c = 0. Escriba una función que
calcule el valor de una ecuación lineal, solveLinEquation.*/
let a = 2;
let b = 9;
let c = 3;
let x = 8;

function solveLinEquation(a, b, c, x){
    return (-a * x - c) / b;
}
let yResolution = solveLinEquation(a, b, c, x);
console.log("1_La ecuacion lineal de dichos valores es:",yResolution);

/*2. La ecuación cuadrática se calcula de la siguiente manera: ax2 + bx + c = 0. Escriba una
función que calcule el valor o los valores de una ecuación cuadrática, solveQuadEquation.*/
/*consola.log(solveQuadratic()) // {0}
consola.log(solveQuadratic(1, 4, 4)) // {-2}
consola.log(solveQuadratic(1, -1, -2)) // {2, -1}
consola.log(solveQuadratic(1, 7, 12)) // {-3, -4}
consola.log(solveQuadratic(1, 0, -4)) //{2, -2}
consola.log(solveQuadratic(1, -1, 0)) //{1, 0}*/

function solveQuadEquation(a, b, c){
    let solvePotencia = Math.pow(b, 2);
    let solveRaizCuadrada = Math.sqrt(( solvePotencia - 4 * a * c)  );
    return (-b + solveRaizCuadrada ) / 2 * a
}
let xResolution = solveQuadEquation(a, b, c);
console.log("2_La ecuación cuadrática de esos valores es:", xResolution)

/*3. Declare un nombre de función printArray. Toma matriz como parámetro e imprime cada
valor de la matriz.*/
const matriz = [8, 4, 6, 7] 
function printArray(matriz){
    for(let i = 0; i < matriz.length; i++){
         console.log( matriz[i]);
    }
}
console.log("3_Los valores de la matriz son los siguientes:");
printArray(matriz);

/*4. Escriba un nombre de función showDateTime que muestre la hora en este formato:
01/08/2020 04:08 usando el objeto Date.
showDateTime()
01/08/2020 04:08:20*/

function showDateTime(){
const date = new Date();
let [month, day, year] = [
  date.getMonth()+1,
  date.getDate(),
  date.getFullYear(),
];
let [hour, minutes, seconds] = [
  date.getHours(),
  date.getMinutes(),
  date.getSeconds(),
];
day = day < 10 ? '0' + day : day;
month = month < 10 ? '0' + month : month;
hour = hour < 10 ? '0' + hour : hour;
minutes = minutes < 10 ? '0' + minutes : minutes;
seconds = seconds < 10 ? '0' + seconds : seconds;

//01/08/2020 04:08:20
console.log( "4_", day + "/" + month + "/" + year + " " + hour + ":" + minutes + ":" + seconds)
}
showDateTime();

/*5. Declare un nombre de función swapValues. Esta función intercambia el valor de x a y.*/
/*swapValues(3, 4) // x => 4, y =>3
swapValues(4, 5) // x = 5, y = 4*/

function swapValues(x, y){
    let temp = x;
     x = y;
     y = temp;
    console.log("5_Los valores originales de x =", y, "e y =", x);
    console.log("Al invertir los valores x =", x, "e y =", y);
}
swapValues(3,4);

/*6. Declare un nombre de función reverseArray. Toma un array como parámetro y devuelve el
reverso del array (no use el método).
consola.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
consola.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A']*/

function reverseArray(array) {
    let reversedArray = new Array(array.length);
    
    for (let i = 0; i < array.length; i++) {
        reversedArray[i] = array[array.length - 1 - i];
    }

    return reversedArray; 
}
let arrayOriginal = [1, 2, 3, 4, 5];
let arrayInvertido = reverseArray(arrayOriginal);

console.log("6_El array original es:", arrayOriginal)
console.log("y el array invertido seria: ",arrayInvertido); 

/*7. Declare un nombre de función capitalizeArray. Toma array como parámetro y devuelve el -
capitalizedarray.*/

function capitalizeArray(array) {
    // Array donde almacenaremos las palabras capitalizadas
    var capitalizedArray = [];
    
    // Recorremos cada palabra del array
    for (var i = 0; i < array.length; i++) {
        var word = array[i]; // Obtenemos la palabra actual
        var capitalizedWord = ""; // Variable para almacenar la palabra capitalizada
        
        // Recorrer cada letra de la palabra
        for (var j = 0; j < word.length; j++) {
            if (j === 0) {
                // Si es la primera letra, convertirla a mayúscula
                if (word[j] >= 'a' && word[j] <= 'z') {
                    capitalizedWord += String.fromCharCode(word.charCodeAt(j) - 32);
                } else {
                    capitalizedWord += word[j];
                }
            } else {
                // Si no es la primera letra, asegurarse que esté en minúscula
                if (word[j] >= 'A' && word[j] <= 'Z') {
                    capitalizedWord += String.fromCharCode(word.charCodeAt(j) + 32);
                } else {
                    capitalizedWord += word[j];
                }
            }
        }
        
        // Agregar la palabra capitalizada al nuevo array
        capitalizedArray.push(capitalizedWord);
    }
    
    // Devolver el nuevo array con palabras capitalizadas
    return capitalizedArray;
}

// Ejemplo de uso:
var palabras = ["hola", "mundo", "javascript"];
console.log(capitalizeArray(palabras)); // ["Hola", "Mundo", "Javascript"]


/*8. Declare un nombre de función addItem. Toma un parámetro de elemento y devuelve una
matriz después de agregar el elemento*/
function addItem(item, matriz){
    matriz[matriz.length] = item;

  return matriz;   
}

let nuevaMatriz = [30, 40, 50];
let nuevoItem = 60;

nuevaMatriz = addItem(nuevoItem, nuevaMatriz);

console.log("8_La matriz con el elemento agregado quedaria asi:", nuevaMatriz)

/*9. Declare un nombre de función removeItem. Toma un parámetro de índice y devuelve una
matriz después de eliminar un elemento*/

function removeItem(indice, array){
let arraySinItem = [];

for (let i = 0; i < array.length; i++){
    const element = array[i];
       if(i != indice){
          arraySinItem[arraySinItem.length] = element;  
        }        
    }
    console.log("El array completo es:", array);

    return arraySinItem;
}
let res = removeItem(2, [5, 8, 9, 4, 3])

console.log("9_El array sin el elemento seria:", res);

/*10. Declare un nombre de función sumOfNumbers. Toma un parámetro numérico y suma todos
los números en ese rango.*/
 
function sumOfNumbers(parametroNum, array){
   
    let sumaArrayPorP = 0;
    for(i = 0; i < parametroNum; i++){
   
           sumaArrayPorP += array[i];
          
    }
    return sumaArrayPorP;
}

let sumaDeNum = sumOfNumbers(2, [100, 200, 300, 400, 500]);
console.log("10_La suma del array hasta el parametro pasado es:", sumaDeNum);

/*11. Declare un nombre de función sumOfOdds. Toma un parámetro numérico y agrega todos
los números impares en ese rango.*/

function sumOfOdds(parametroNum, array){
     
    let sumaArrayPorPImp = 0;
    for(i = 0; i < parametroNum; i++){
       
        if(array[i] % 2 != 0){
           sumaArrayPorPImp += array[i];
        }          
    }
    return sumaArrayPorPImp;
}

let sumaNumImpPP = sumOfOdds(3, [1, 2, 3, 4, 5, 6]);
console.log("11_La suma de los impares del array hasta el parametro es:", sumaNumImpPP);

/*12. Declare un nombre de función sumOfEven. Toma un parámetro numérico y suma todos los
números pares en ese rango.*/

function sumOfEven(parametroNum, array){
   
    let sumaArrayPorPPar = 0;
    for(i = 0; i < parametroNum ; i++){
     
        if(array[i] % 2 === 0){
           sumaArrayPorPPar += array[i];
        }          
    }
    return sumaArrayPorPPar;
}

let sumaNumParesPP = sumOfEven(4, [1, 2, 3, 4, 5, 6]);
console.log("12_La suma de los impares del array hasta el parametroes:", sumaNumParesPP);

/*13. Declare un nombre de función evensAndOdds . Toma un entero positivo como parámetro y
cuenta el número de pares e impares en el número.
 evensAndOdds(100);
 El número de impares es 50.
 El número de pares es 51.*/

function evensAndOdds(numEntero){
    let sumaParesNE = 0;
    let sumaImpNE = 0;
    for(i = 0; i <= numEntero; i++){
    
       if(i % 2 === 0){ 
        sumaParesNE++;
       }
        else{ 
        sumaImpNE++;
        }  
    }
    console.log("13_El número de impares es:", sumaImpNE);
    console.log("El número de pares es:", sumaParesNE);
}
evensAndOdds(100);

/*14. Escriba una función que tome cualquier número de argumentos y devuelva la suma de los
argumentos
suma(1, 2, 3) // -> 6
suma(1, 2, 3, 4) // -> 10*/

function suma(...params) {
    console.log(params);
    let suma = 0;
    for (let i = 0; i < params.length; i++){
      suma += params[i];
    }
    console.log("14_🚀 ~ suma ~ suma:", suma)
  }
  
  suma(1, 2, 3, 4)
  suma(1, 2, 3, 34, 5, 26, 2, 8, 9, 11)
                        
/*15. Escriba una función que genere un randomUserIp.*/

function randomUserIp(){

    let parIp1 = Math.floor((Math.random() * 255));
    let parIp2 = Math.floor((Math.random() * 255));
    let parIp3 = Math.floor((Math.random() * 255));
    let parIp4 = Math.floor((Math.random() * 255));
   
    console.log("15_La ip aleatoria es:", parIp1 + "."+ parIp2 + "." + parIp3 + "." + parIp4);
}
 randomUserIp();

/*16. Escriba una función que genere una MacAddress aleatoria*/

const valoresHexa = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  
  

    function randomUserMacAddress() {
      
        function RandomHexPar() {
           
            var number = Math.floor(Math.random() * 256);
            
            var firstDigit = valoresHexa[Math.floor(number / 16)];
        
            var secondDigit = valoresHexa[number % 16];
    
            return firstDigit + secondDigit;
        }
        
        let arrayMacAddress = "";
        for (let i = 0; i < 6; i++) {
            arrayMacAddress += RandomHexPar();
            
            if (i < 5) {
                arrayMacAddress += ":";
            }
        }
        
        return arrayMacAddress;
    }
    
    console.log("16_La MacAddress aleatoria es:", randomUserMacAddress());

/*17. Declare un nombre de función randomHexaNumberGenerator. Cuando se llama a esta
función, genera un número hexadecimal aleatorio. La función devuelve el número
hexadecimal.
console.log(randomHexaNumberGenerator());
'#ee33df'*/

function randomHexaNumberGenerator(){

    arrayHexaNumber = '';

    function digitoHexa() {
  
      let indice = Math.floor(Math.random() * valoresHexa.length);
      return valoresHexa[indice];
    }
        for (let i = 0; i < 7; i++) {
            arrayHexaNumber += digitoHexa();
        }

  return arrayHexaNumber 

}
console.log("17_El numero hexadecimal aleatorio es:", randomHexaNumberGenerator());

/*18. Declare un nombre de función userIdGenerator. Cuando se llama a esta función, genera
una identificación de siete caracteres. La función devuelve el id.
consola.log(userIdGenerator());
41XTDbE*/

/*function userIdGenerator(){
   const arrayCaracteres = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
Continua en el ejercicio lvl3

    
}*/



    