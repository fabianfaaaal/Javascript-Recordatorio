//Objetos

function mostrarInformacionTarea(tarea, prioridad) {
  return `La tarea ${tarea} tiene una prioridad de ${prioridad}`;
}
//Object Literal

let nombrePersona = "Juan";
let profesion = "Desarrolador web";

const persona = {
  nombre: "Juan",
  profesion: "Desarrolador Web",
  edad: 500,
};

console.log(persona); //accedes al objeto
console.log(persona.nombre); //accedes a los valores del objetos
console.log(persona["edad"]); //otra forma para acceder a los valores del objetos

//Object Constructor

function Tarea(nombre, urgencia) {
  this.nombre = nombre;
  this.urgencia = urgencia;
}

//creas una nueva tarea:
const tarea1 = new Tarea("Aprender JS", "Urgente");

console.log(tarea1);

//lo bueno de esto es que puedes crear multiplos objetos tareas

//////////////////////////////
//Prototypes

const mostrarInfo = mostrarInformacionTarea(tarea1.nombre, tarea1.urgencia);
console.log(mostrarInfo);

Tarea.prototype.mostrar = function () {
  return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`;
};

console.log(tarea1);
console.log(tarea1.mostrar());

//////////////////////////////

// Destructuring de objetos

const aprendiendoJS = {
  version: "ES6+",
  frameworks: ["React", "VueJS", "AngularJS"],
};

// Destructuring es extraer valores de un objetos

console.log(aprendiendoJS);

//version anterior
// let version = aprendiendoJS.version

// console.log(version)

//Destructuring forma nueva

let { version, frameworks } = aprendiendoJS;

console.log(version);
console.log(frameworks);

/////////////////////////////////////////

// Object literal enhancement

const banda = "Metallica";
const genero = "Heavy Metal";
const canciones = ["Master Of Puppets", "Seek & Destroy", "Enter Sandman"];

//forma anterior

// const metallica = {
//     banda: banda,
//     genero: genero,
//     canciones: canciones
// }

//forma nueva
const metallica = { banda, genero, canciones };

console.log(metallica);

//////////////////////////////

//Metodos o funciones en un objeto

const persona5 = {
  nombre: "Juan",
  trabajo: "Desarrollador Web",
  edad: 500,
  musicaRock: true,
  mostrarInformacion() {
    console.log(`${this.nombre} es ${this.trabajo} y su edad es ${edad}`);
  },
};

persona5.mostrarInformacion();
