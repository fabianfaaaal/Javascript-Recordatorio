//Scope 
//El Scope, en simples terminos, es saber en tu programa, en que parte está disponible o no disponible esa variable o valor de la variable.

//El Scope con var
// var musica = "rock"; //inicializamos la variable

// if(musica){ //Si la variable existe
//     var musica = "Grunge" //Cambiamos la variable 
//     console.log("Dentro del if: ", musica); // Mostramos por consola el cambio dentro del if
// }

// console.log("Fuera del if ", musica); // Al imprimir la variable vemos que con var se ven los cambios en las dos instancias. Most


//El Scope con let

let musica = "rock"; // Ahora usamos let

if(musica){
    let musica = "Grunge"
    console.log("Dentro del if: ", musica); //Ahora dentro del bloque tiene otro valor
}

console.log("Fuera del if ", musica); //Fuera del if, no reconoce el cambio dentro del if, por lo que se muestra la informacion original.


//El Scope con const

const musica1 = "Electro"; // Ahora usamos const

if(musica){
    const musica1 = "Grunge"
    console.log("Dentro del if: ", musica1); //Ahora dentro del bloque tiene otro valor
} //Las llaves determinan los bloques de ejecucion por lo que si usamos variables con let y const, los cambios se veran dentro de ese bloque.

console.log("Fuera del if ", musica1);//Fuera del if, no reconoce el cambio dentro del if, igual que con let pero esta vez usamos const, por lo que se muestra la informacion original.

