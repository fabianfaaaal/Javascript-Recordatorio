//Creando una función

console.log("Bienvenido");

//Function declaration
function saludar(nombre) {
  console.log("Bienvenido" + nombre);
}

saludar("Juan");
saludar("Alejandra");
saludar("Miguel");

//function exporession

const cliente = function (nombreCliente) {
  console.log("Mostrando datos del cliente: " + nombreCliente);
};

cliente("Juan");

//cuando utilizas function delcaration, no importa donde llames la funcion, se ejecutara.
//pero cuando usas function exporession, debes llamar a la funcion despues de la declaracion siempre.

//////////////////////////////

//Parametros por default
function actividad(nombre = "Walter", actividad = "Enseñar quimica") {
  // = definimos el default
  console.log(`La persona ${nombre}, esta realizando la actividad${actividad}`);
}

actividad("Juan", "Apredende JS");
actividad("Pedro", "Creando un sito Web");
actividad(); //se muestra la informacion default

const actividad1 = function (nombre = "Walter", actividad = "Enseñar quimica") {
  console.log(`La persona ${nombre}, esta realizando la actividad${actividad}`);
};
actividad1();

//////////////////////////////

//ARROW FUNCTIONS

let viajando = function (destino) {
  return `Viajando a la ciudad de: ${destino}`;
};

let viaje = viajando("Paris");

console.log(viaje);

let viajando1 = (destino) => {
  //notese que no tiene parentesis ya que solo se pasa un argumento a la funcion
  return `Viajando a la ciudad de: ${destino}`;
};

let viaje1 = viajando1("Argentina");
console.log(viaje1);

let viajando2 = (destino) => `Viajando a la ciudad de: ${destino}`;

let viaje2 = viajando2("Ecuador");

console.log(viaje2);
