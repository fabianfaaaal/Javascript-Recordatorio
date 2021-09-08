//Template Strings

const nombre = "Juan";
const trabajo = "Desarrollador web";

//Concatenar javascriptos
console.log("Nombre: " + nombre + ", Trabajo: " + trabajo); //Esta era la forma anterior que se
//usaba para concatenar strings con otras cosas (por ejemplo variables).

console.log(`Nombre: ${nombre} ,Trabajo: ${trabajo}`); //Esta es la nueva forma para concaterar
// Se utiliza ${} para concatenar las variables.

//Concatenar con multiples lineas

const contenedorApp = document.querySelector("#app"); //Asi selecciona elementos en JS
// let html = '<ul>' +
//                 '<li> Nombre: ' + nombre + '</li>' + //Creamos nuestro html
//                 '<li> Trabajo: ' +trabajo+ '</li>' +
//             '</ul>';

//El principal problema es la cantidad de simbolos puede llevar a tener problemas de tipeo
// y encontrar el error cuesta mucho más.

let html = `
        <ul>
            <li>Nombre: ${nombre} </li>
            <li>Trabajo: ${trabajo} </li>
        </ul>
`;

//Ahora si el codigo queda mucho mas limpio y más facil de leer.

contenedorApp.innerHTML = html; //Imprimimos dentro del contenedorApp
