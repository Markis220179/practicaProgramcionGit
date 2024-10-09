//1_Realice un código que imprima su nombre completo.
console.log("1 Marcos Ariel Lopez");
//2_Realice un código que tenga las variables firstName, lastName e imprima su nombre completo.
var firstName = "2 Marcos Ariel";
var lastName = "Lopez";
console.log(firstName, lastName);
//3_Declare dos variables con números y muestre su suma.
var num1 = 8;
var num2 = 2;
console.log("La suma de los numeros es ", num1 + num2);
//4_El área de un rectángulo se calcula de la siguiente manera: área = largo x ancho. Escribe un código que lo calcule y muestre su resultado.
var largo = 10;
var ancho = 20;
var area = largo * ancho;
console.log("El area de un rectangulo es ",area);
/*5_El perímetro de un rectángulo se calcula de la siguiente manera: perímetro = 2x (largo + ancho). Escribe un código que lo 
calcule y muestre su resultado.*/
var perímetro = 2*(largo + ancho);
console.log("El perimetro de un rectangulo es ", perímetro);
/*6_El volumen de un prisma rectangular se calcula de la siguiente manera: volumen = largo x ancho x alto. Escribe un código que lo 
calcule y muestre su resultado.*/
var alto = 30;
var volumen = largo * ancho * alto;
console.log("El volumen de un prisma es ", volumen);
//7_El área de un círculo se calcula de la siguiente manera: área = π x r x r. Escribe un código que lo calcule y muestre su resultado.
var π = Math.PI; 
var radio = 40;
var areaCirculo = π * (radio**2);
console.log("El area de un circulo es ", areaCirculo);
//8_La circunferencia de un círculo se calcula de la siguiente manera: circunferencia = 2πr. Escribe un código que lo calcule y muestre su resultado
var circunferencia = 2 * π * radio;
console.log("La circunferencia de un circulo es ", circunferencia) 
//9_La densidad de una sustancia se calcula de la siguiente manera: densidad = masa/volumen. Escribe un código que lo calcule y muestre su resultado.
var masa = 100;
var volumenSustancia = 20;
var densidad = masa / volumenSustancia;
console.log("La densidad de una sustancia es ", densidad);
/*10_La velocidad se calcula dividiendo la distancia total recorrida por un objeto en movimiento entre 
el tiempo total empleado. Escribe un código que lo calcule y muestre su resultado.*/
var distanciaTotal = 200;
var tiempoTotal = 2.17;
var velocidad = distanciaTotal / tiempoTotal;
console.log("La velocidad del objeto es ", velocidad);
//11_El peso de una sustancia se calcula de la siguiente manera: peso = masa x gravedad. Escribe un código que calcule el peso.
var gravedad = 9.8;
var pesoSustancia = masa * gravedad;
console.log("El peso del objeto es ", pesoSustancia);
