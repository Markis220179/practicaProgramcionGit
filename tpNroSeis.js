/*TP – Objetos

1) Dada una lista con cuentas bancarias con la siguiente información:
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
    tipo: "corriente",
    importe: 750,
    tipoMoneda: "dolar",
    plazoFijo: [{
      estado: "inactivo",
      importe: 500,
      fechaCreacion: "2023-01-20",
      plazo: 45, // en días
    }],
  };

  const cuentas = [cuenta1, cuenta2, cuenta3, cuenta4];

/*Donde plazoFijo indica si la cuenta tiene asociado un plazo fijo o no.
  a) Realiza una función que devuelva todos las cuentas con plazos fijos activos a partir de una
  fecha dada.*/

function devolCuentActDate(arrayObjets){

  const listActivas = [];
  for (let index = 0; index < arrayObjets.length; index++) {

    for (let i = 0; i < arrayObjets[index].plazoFijo.length; i++) {
      if (arrayObjets[index].plazoFijo[i].estado === "activo" && arrayObjets[index].plazoFijo[i].fechaCreacion > "2022-03-22") {
         
        listActivas.push(arrayObjets[index]);
        break;
      }
    }
  }
return listActivas;

}

console.log("1-A_Cuentas con estados activos:", devolCuentActDate(cuentas));

/*b) Realiza una función que devuelva todos las cuentas con plazos fijos con plazo mayor a 30
  días.*/

  function devolCuentMayor30D(arrayObjets) {
    let listaMayores = [];
    for (let index = 0; index < arrayObjets.length; index++) {
      
      for (let i = 0; i < arrayObjets[index].plazoFijo.length; i++) {
        if (arrayObjets[index].plazoFijo[i].plazo > 30) {
         
          listaMayores.push(arrayObjets[index]);
          break;
        }
      }
    }
  
    return listaMayores;
  }
   
  console.log("1-B_Cuentas con plazos mayores a 30 días:", devolCuentMayor30D(cuentas));
  

/*c) Realiza una función que devuelva todos las cuentas del tipo corriente.*/

function devolCuentasCorrien(arrayObjets){
  let listaCorrientes = [];
  for (let index = 0; index < arrayObjets.length; index++) {
    if(arrayObjets[index].tipo === "corriente"){

      listaCorrientes.push(arrayObjets[index]);
     
    }
  }
  return listaCorrientes;  
}

console.log("1-C_Las cuentas del tipo corriente son:", devolCuentasCorrien(cuentas));

/*d) Realiza una función que devuelva todos las cuentas de un tipo de moneda especificado.*/

function devolTypeCoin(arrayObjets){
  const listaMoneda = [];
  for(let index = 0; index < arrayObjets.length; index++){
    if(arrayObjets[index].tipoMoneda === "dolar"){

      listaMoneda.push(arrayObjets[index]);
    }
  }
  return listaMoneda;
}

console.log("1-D_Las cuentas con el tipo de moneda dada son:",  devolTypeCoin(cuentas));

/*e) Realiza una función que permita descontar un importe dado (mantenimiento de cuenta) a
  todas las cuentas en la lista.*/

function accountMaitenance(arrayObjets, accMaint) {
  const newObj = JSON.parse(JSON.stringify(arrayObjets))

  newObj.forEach(element => {
    
   return element.importe = element.importe - accMaint;
  });


return newObj;
}

console.log("1-E_Las cuentas descontando el mantenimiento quedarian asi:", accountMaitenance(cuentas, 100));

/*f) Realiza una función que permita incrementar un porcentaje dado (por beneficios
  exclusivos) a todas las cuentas con plazo fijo con importe mayor a 500000.*/

  let cuenta5 = {
    tipo: "ahorro",
    importe: 450,
    tipoMoneda: "dolar",
    plazoFijo: [{
      estado: "inactivo",
      importe: 650000,
      fechaCreacion: "2023-09-28",
      plazo: 150, // en días
    }],
  }
    
  let arrayMod = addAccount(cuenta5, cuentas);

  function increPorcentDado(arrayObjets, porcentaje){

    
  }

/*g) Realiza una función que permita cargar una nueva cuenta al final de la lista.*/

function addAccount(newAccount, arrayObjets){
  const newObj = [...arrayObjets];

  newObj[newObj.length] = newAccount;
  
  return newObj;
} 

let cuenta5Bis = {
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

console.log("1-G_Al cargar una nueva cuenta quedaria asi:", addAccount(cuenta5Bis, cuentas));


/*h) Realiza una función que permita ordenar la lista según el importe de cada cuenta.*/

function orderListAmount(arrayObjets){
  const newObj = [...arrayObjets];

  newObj.sort((a, b) => b.importe - a.importe );

  return newObj;
}

console.log("1-H_Las cuentas ordenadas por el importe quedarian asi:", orderListAmount(cuentas));

/*i) Realiza una función que permita ordenar la lista según 
el vencimientos de los plazos fijos.*/

function orderListFixedTerm(arrayObjets){
  const newObj = [...arrayObjets];
  for(let index = 0; index < newObj.length; index++){

      
      newObj.sort((a, b) => b.plazoFijo[0].plazo - a.plazoFijo[0].plazo);
  }
  return newObj;
}

console.log("1-i_Las cuentas ordenadas por el vto. de plazo fijo quedarian asi:", orderListFixedTerm(cuentas));


/*2) Dada una lista con venta de pasajes con la siguiente información:
pasaje = {
categoria: "primera", // "segunda"
precio: 100,
descuento: 10,
estado: "disponible", // "vendido"
}

a) Realiza una función que devuelva la cantidad de pasajes disponibles.
b) Realiza una función que ordene los pasajes por precio de mayor a menor.
c) Realiza una función que devuelva todos los pasajes con descuento mayor a un valor dado.
d) Realiza una función que devuelva todos las cuentas de un tipo de moneda especificado.
e) Realiza una función que permita agregar un descuento a un pasaje y aplicarlo al importe.
f) Realiza una función que permita buscar pasajes de una cierta categoría y que estén
disponibles.*/



/*3) Dada una lista con las butacas de un cine con la siguiente información:
butaca = {
numero: 1,
fila: "A",
estado: "libre", // "ocupada"
ubicacion: "izquierda" // "derecha" // "centro"
}
a) Realiza una función que devuelva las butacas libres.
b) Realiza una función que devuelva las butacas libres dada una cierta ubicación.
c) Realiza una función que devuelva la cantidad de butacas ocupadas.
d) Realiza una función que indique la distribución de las butacas ocupadas, es decir, en caso
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


