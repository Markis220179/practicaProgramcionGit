/*TP – Objetos*/
console.log("*********************1***************");
/*1) Dada una lista con cuentas bancarias con la siguiente información:
cuenta = {
tipo: "corriente", // "ahorro"
importe: 200,
tipoMoneda: "peso", // "euro", // "dolar",
plazoFijo: [{
estado: "activo", // "inactivo"
importe: 100,
fechaCreacion: "2020-01-01",
plazo: 30, // en dias
}],
}*/

let cuenta1 = {
  id: "cuenta1",
  tipo: "corriente",
  importe: 500,
  tipoMoneda: "peso",
  plazoFijo: [{
    estado: "activo",
    importe: 200,
    fechaCreacion: "2023-06-15",
    plazo: 60, // en días
  }],
};

let cuenta2 = {
  id: "cuenta2",
  tipo: "ahorro",
  importe: 1500,
  tipoMoneda: "dolar",
  plazoFijo: [{
    estado: "inactivo",
    importe: 1000,
    fechaCreacion: "2022-09-01",
    plazo: 90, // en días
  }],
};

let cuenta3 = {
  id: "cuenta3",
  tipo: "ahorro",
  importe: 2500,
  tipoMoneda: "euro",
  plazoFijo: [{
    estado: "activo",
    importe: 1500,
    fechaCreacion: "2021-03-10",
    plazo: 120, // en días
  }],
};

let cuenta4 = {
  id: "cuenta4",
  tipo: "corriente",
  importe: 750,
  tipoMoneda: "dolar",
  plazoFijo: [{
    estado: "inactivo",
    importe: 650000,
    fechaCreacion: "2023-01-20",
    plazo: 45, // en días
  }],
};

const cuentas = [cuenta1, cuenta2, cuenta3, cuenta4];

/*Donde plazoFijo indica si la cuenta tiene asociado un plazo fijo o no.
  a) Realiza una función que devuelva todos las cuentas con plazos fijos activos a partir de una
  fecha dada.*/

function devolCuentActDate(arrayObjets) {

  const listActivas = [];
  for (let index = 0; index < arrayObjets.length; index++) {

    for (let i = 0; i < arrayObjets[index].plazoFijo.length; i++) {
      if (arrayObjets[index].plazoFijo[i].estado === "activo" && arrayObjets[index].plazoFijo[i].fechaCreacion > "2022-03-22") {
        console.log(arrayObjets[index].id);

        listActivas.push(arrayObjets[index]);
        break;
      }
    }
  }
  return listActivas;
}

console.log("1-A_Cuentas con estados activos:");
devolCuentActDate(cuentas);

/*b) Realiza una función que devuelva todos las cuentas con plazos fijos con plazo mayor a 30
  días.*/

function devolCuentMayor30D(arrayObjets) {
  let listaMayores = [];
  for (let index = 0; index < arrayObjets.length; index++) {

    for (let i = 0; i < arrayObjets[index].plazoFijo.length; i++) {
      if (arrayObjets[index].plazoFijo[i].plazo > 30) {
        console.log(arrayObjets[index].id);

        listaMayores.push(arrayObjets[index]);
        break;
      }
    }
  }

  return listaMayores;
}

console.log("1-B_Cuentas con plazos mayores a 30 días:");
devolCuentMayor30D(cuentas);


/*c) Realiza una función que devuelva todos las cuentas del tipo corriente.*/

function devolCuentasCorrien(arrayObjets) {
  let listaCorrientes = [];
  for (let index = 0; index < arrayObjets.length; index++) {
    if (arrayObjets[index].tipo === "corriente") {
      console.log(arrayObjets[index].id);

      listaCorrientes.push(arrayObjets[index]);
    }
  }
  return listaCorrientes;
}

console.log("1-C_Las cuentas del tipo corriente son:");
devolCuentasCorrien(cuentas);

/*d) Realiza una función que devuelva todos las cuentas de un tipo de moneda especificado.*/

function devolTypeCoin(arrayObjets) {
  const listaMoneda = [];
  for (let index = 0; index < arrayObjets.length; index++) {
    if (arrayObjets[index].tipoMoneda === "dolar") {
      console.log(arrayObjets[index].id);

      listaMoneda.push(arrayObjets[index]);
    }
  }
  return listaMoneda;
}

console.log("1-D_Las cuentas con el tipo de moneda dada son:");
devolTypeCoin(cuentas);

/*e) Realiza una función que permita descontar un importe dado (mantenimiento de cuenta) a
  todas las cuentas en la lista.*/

function accountMaitenance(arrayObjets, accMaint) {

  const newObj = JSON.parse(JSON.stringify(arrayObjets));

  newObj.forEach(element => {
    element.importe = element.importe - accMaint;
  });

  const cuentasConDescuento = newObj.map(element => ({
    id: element.id,
    importe: element.importe
  }));

  return cuentasConDescuento;
}

console.log("1-E_Las cuentas descontando el mantenimiento quedarían así:", accountMaitenance(cuentas, 100));

/*f) Realiza una función que permita incrementar un porcentaje dado (por beneficios
  exclusivos) a todas las cuentas con plazo fijo con importe mayor a 500000.*/

function increPorcentDado(arrayObjets, porcentaje) {
  listaAccountIncrem = [];
  for (let index = 0; index < arrayObjets.length; index++) {

    for (let i = 0; i < arrayObjets[index].plazoFijo.length; i++) {
      if (arrayObjets[index].plazoFijo[i].importe > 500000) {

        let incremento = arrayObjets[index].plazoFijo[i].importe * (porcentaje / 100);

        arrayObjets[index].plazoFijo[i].importe += incremento;

        listaAccountIncrem.push(arrayObjets[index]);

        console.log("1-F_" + arrayObjets[index].id + " - Importe actualizado del plazo fijo: " + arrayObjets[index].plazoFijo[i].importe);

        break;
      }
    }
  }

  return listaAccountIncrem;
}

increPorcentDado(cuentas, 20);

/*g) Realiza una función que permita cargar una nueva cuenta al final de la lista.*/

function addAccount(newAccount, arrayObjets) {
  const newObj = [...arrayObjets];

  newObj.push(newAccount);

  const arrayIds = newObj.map(cuenta => cuenta.id);

  return arrayIds;
}

let cuenta5 = {
  id: "cuenta5",
  tipo: "corriente",
  importe: 300,
  tipoMoneda: "euro",
  plazoFijo: [{
    estado: "inactivo",
    importe: 600,
    fechaCreacion: "2022-07-21",
    plazo: 120, // en días
  }],
};

let idsCuentas = addAccount(cuenta5, cuentas);
console.log("1-G_Al cargar una nueva cuenta quedaría así:", idsCuentas);


/*h) Realiza una función que permita ordenar la lista según el importe de cada cuenta.*/

function orderListAmount(arrayObjets) {
  const newObj = [...arrayObjets];

  newObj.sort((a, b) => b.importe - a.importe);

  const cuentasOrdenadas = newObj.map(cuenta => cuenta.id);

  return cuentasOrdenadas;
}

console.log("1-H_Las cuentas ordenadas por el importe quedarian asi:", orderListAmount(cuentas));

/*i) Realiza una función que permita ordenar la lista según 
el vencimientos de los plazos fijos.*/

function orderListFixedTerm(arrayObjets) {
  const newObj = [...arrayObjets];
  for (let index = 0; index < newObj.length; index++) {


    newObj.sort((a, b) => b.plazoFijo[0].plazo - a.plazoFijo[0].plazo);

  }
  const cuentasOrdenadas2 = newObj.map(cuenta => cuenta.id);

  return cuentasOrdenadas2;
}

console.log("1-i_Las cuentas ordenadas por el vto. de plazo fijo quedarian asi:", orderListFixedTerm(cuentas));

console.log("*********************2***************")
/*2) Dada una lista con venta de pasajes con la siguiente información:
pasaje = {
categoria: "primera", // "segunda"
precio: 100,
descuento: 10,
estado: "disponible", // "vendido"
}*/


let pasaje1 = {
  id: "pasaje1",
  categoria: "primera",
  precio: 150,
  descuento: 20,
  estado: "disponible"
}
let pasaje2 = {
  id: "pasaje2",
  categoria: "segunda",
  precio: 100,
  descuento: 10,
  estado: "vendido"
}
let pasaje3 = {
  id: "pasaje3",
  categoria: "primera",
  precio: 200,
  descuento: 15,
  estado: "disponible"
}
let pasaje4 = {
  id: "pasaje4",
  categoria: "segunda",
  precio: 80,
  descuento: 5,
  estado: "vendido"
}
let pasaje5 = {
  id: "pasaje5",
  categoria: "primera",
  precio: 180,
  descuento: 10,
  estado: "disponible"
}
let pasaje6 = {
  id: "pasaje6",
  categoria: "segunda",
  precio: 130,
  descuento: 30,
  estado: "disponible"
}

const pasajes = [pasaje1, pasaje2, pasaje3, pasaje4, pasaje5, pasaje6];

/*a) Realiza una función que devuelva la cantidad de pasajes disponibles.*/

function ticketsAvailable(arrayTickets) {
  let disponible = 0;

  for (let index = 0; index < arrayTickets.length; index++) {
    if (arrayTickets[index].estado === "disponible") {
      disponible += 1;
    }
  }

  return disponible;
}

console.log("2-A_La cantidad de pasajes disponibles es:", ticketsAvailable(pasajes));

/*b) Realiza una función que ordene los pasajes por precio de mayor a menor.*/

function ticketsPriceSorted(arrayTickets) {
  const arrayDupli = [...arrayTickets];


  arrayDupli.sort((a, b) => b.precio - a.precio);


  const ordenados = arrayDupli.map(ticket => ticket.id);

  return ordenados;
}

console.log("2-B_Los pasajes ordenados según el precio son:");
console.log(ticketsPriceSorted(pasajes));

/*c) Realiza una función que devuelva todos los pasajes con descuento mayor a un valor dado.*/

function ticketsDiscounted(arrayTickets, discoun) {
  const descuentoMayor = [];
  for (let index = 0; index < arrayTickets.length; index++) {

    if (arrayTickets[index].descuento >= discoun) {

      descuentoMayor.push(arrayTickets[index]);
    }

  }
  const descuentos = descuentoMayor.map(ticket => ticket.id);

  return descuentos;
}

console.log("2-C_Los pasajes con el descuento mayor a lo dado son:");
console.log(ticketsDiscounted(pasajes, 20));

/*d) Realiza una función que devuelva todos las cuentas de un tipo de moneda especificado.*/
/*Este pertenece a el ejercico de cuentas*/

/*d) Realiza una función que permita agregar un descuento a un pasaje y aplicarlo al importe.*/

function ticketsDiscountedAdd(arrayTickets, discoun, ticket) {
  const pasaje = arrayTickets[ticket - 1];

  let descuento = pasaje.precio * (discoun / 100);

  pasaje.precio -= descuento;

  console.log(pasaje.id, pasaje.precio);

  return pasaje;

}

console.log("2-D_Este pasaje con el descuento aplicado quedaria:");
ticketsDiscountedAdd(pasajes, 30, 3);

/*e) Realiza una función que permita buscar pasajes de una cierta categoría y que estén
disponibles.*/

function ticketsCategory(arrayTickets, tipoCateg) {
  const categDispon = [];
  for (let index = 0; index < arrayTickets.length; index++) {
    if (arrayTickets[index].categoria === tipoCateg && arrayTickets[index].estado === "disponible") {

      categDispon.push(arrayTickets[index]);

      console.log(arrayTickets[index].id);

    }

  }
      
}

console.log("2-E_Los pasajes de la categoria pedida disponibles son:");
ticketsCategory(pasajes, "primera");


/*3) Dada una lista con las butacas de un cine con la siguiente información:
butaca = {
numero: 1,
fila: "A",
estado: "libre", // "ocupada"
ubicacion: "izquierda" // "derecha" // "centro"
}*/


const butaca1 = { numero: 1, fila: "A", estado: "libre", ubicacion: "izquierda" };
const butaca2 = { numero: 2, fila: "A", estado: "ocupada", ubicacion: "centro" };
const butaca3 = { numero: 3, fila: "A", estado: "libre", ubicacion: "derecha" };
const butaca4 = { numero: 4, fila: "B", estado: "ocupada", ubicacion: "izquierda" };
const butaca5 = { numero: 5, fila: "B", estado: "libre", ubicacion: "centro" };
const butaca6 = { numero: 6, fila: "B", estado: "ocupada", ubicacion: "derecha" };
const butaca7 = { numero: 7, fila: "C", estado: "libre", ubicacion: "izquierda" };
const butaca8 = { numero: 8, fila: "C", estado: "ocupada", ubicacion: "centro" };
const butaca9 = { numero: 9, fila: "C", estado: "libre", ubicacion: "derecha" };
const butaca10 = { numero: 10, fila: "D", estado: "ocupada", ubicacion: "centro" };

const butacas = [butaca1, butaca2, butaca3, butaca4, butaca5, butaca6, butaca7, butaca8, butaca9, butaca10];


/*a) Realiza una función que devuelva las butacas libres.*/



/*b) Realiza una función que devuelva las butacas libres dada una cierta ubicación.*/



/*c) Realiza una función que devuelva la cantidad de butacas ocupadas.*/



/*d) Realiza una función que indique la distribución de las butacas ocupadas, es decir, en caso
que halla la misma cantidad de butacas en cada ubicación, la distribución será
“homogénea”, de lo contrario será según donde se encuentre mayor cantidad.*/



/*4) Dada una lista con las vehículos de una agencia automotriz con la siguiente información:
auto = {
marca: "Ford",
modelo: "Focus",
color: "Blanco",
anio: 2019,
precio: 150000,
km: 0,
estado: "disponible", // "vendido"
}
a) Realiza una función que devuelva los autos dado su marca y modelo.
b) Realiza una función que devuelva los autos según un año de fabricación.
c) Realiza una función que devuelva los autos según un kilometraje.
d) Idem por precio, estado, etc.
e) Como realizarías una única función que liste los vehículos según diferentes parámetros?. Do it!!.
f) Realiza una función que permita ingresar nuevos vehículos.*/



/*5) Dada una lista de aulas de una escuela con la siguiente información:
aula = {
capacidad: 50,
nombre: "Aula 1",
horarios: [
{ hora: "08:00", estado: "ocupada", materia: "Matematicas" }, // "ocupado"
{ hora: "09:00", estado: "ocupada", materia: "Matematicas" },
{ hora: "10:00", estado: "ocupada", materia: "Fisica" },
{ hora: "11:00", estado: "ocupada", materia: "Informatica" },
{ hora: "12:00", estado: "disponible", materia: null },
// .... etc
]
}
a) Realiza una función que dada un número de alumnos devuelva las aulas disponibles y en
que rango horario.
b) Realiza una función que dado un número de alumnos y un horario de inicio y fin, devuelva
si se encuentran aulas disponibles para asignar según los requisitos.
c) Realiza una función que dado un nombre de materia se pueda liberar el aula (volverla
disponible en el horario de la materia).
d) Modifica el objeto para incorporar el día de la semana y corrige las funciones realizadas
para tener en cuenta el día de la semana.
e) Propone mejoras en el objeto para que las funciones sean más sencillas y/o eficientes*/


/*6) Dada una lista de propiedades de una inmobiliaria con la siguiente información:
propiedad = {
tipo: "casa", // "departamento"
importe: 500000,
condicion: {
venta: true,
alquiler: false
},
estado: "disponible", // "vendido" "alquilado"
fechaAlquiler: "2020-01-01",
}
a) Realiza una función que liste todas las propiedades tipo casa (devuelve la lista).
b) Realiza una función permita modificar su estado de venta o alquiler.
c) Realiza una función que permita modificar su importe.

d) Realiza una función que permita agregar tipo de moneda como dato a todas las
propiedades y le asigne un valor por defecto.
e) Realiza una función que calcule la suma de los valores de las propiedades alquiladas.
f) Realiza una función que calcule la ganancia de comisión de las propiedades vendidas en un
cierto mes.*/



/*7) Dada una lista de ómnibus de una estación con la siguiente información:
omnibus = {
linea: "1",
empresa: "RapidBus",
capacidad: 50,
butacas: [
{ numero: 1, estado: "libre", ubicacion: "pasillo" }, // "ocupado"
{ numero: 2, estado: "ocupado", ubicacion: "ventanilla" },
{ numero: 3, estado: "libre", ubicacion: "pasillo" },
]
}
a) Realiza una función que de una lista de las líneas que poseen butacas disponibles.
b) Realiza una función para poder asignarles valores a las butacas, las de adelante (hasta
numero 15) saldrán 200, las del medio (del numero 16 al 30) valdrán 300 y las restantes
saldrán 400.
c) Teniendo en cuenta el inciso anterior. Realiza una función que devuelva el monto de la
venta de butacas de una empresa y línea en particular.
d) Realiza una función que dado un omnibus de una empresa con pocas ventas de pasajes
reasigne sus butacas a otra de la misma empresa.*/


