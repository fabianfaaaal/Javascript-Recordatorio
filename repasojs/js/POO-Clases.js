//Programacion Orientada a Objetos - Clases

//Escribir clases 

//Todas las clases van con mayusculas

class Tarea{
    constructor(nombre, prioridad){
        this.nombre = nombre
        this.prioridad = prioridad
    }
    mostrar(){ //método, es una funcion dentro de una clase
        return(`${this.nombre} tiene una prioridad de ${this.prioridad}`)
    }
}

//Heredar las clases y sus metodos en ReactJS
class ComprasPendientes extends Tarea{
    constructor(nombre, prioridad, cantidad){
        super(nombre, prioridad)
        this.cantidad = cantidad
    }
}



//crear los objetos
let tarea1 = new Tarea('Aprender JavaScript', 'Alta')
let tarea2 = new Tarea('Preparar café', 'Alta')
let tarea3 = new Tarea('Pasear al perro', 'Media')
let tarea4 = new Tarea('Conocer a mis suegros', 'Baja')


console.log(tarea1.mostrar())
console.log(tarea2.mostrar())
console.log(tarea3.mostrar())
console.log(tarea4.mostrar())

//compras

let compra1 = new ComprasPendientes('Jabon', 'Urgente',3)
console.log(compra1)
console.log(compra1.mostrar())

