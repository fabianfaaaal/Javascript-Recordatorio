//Arreglos y .map

const carrito = ["producto1", "producto2", "producto3"];

console.log(carrito);

// const appContenedor = document.querySelector("#app");

// let html = "";
// carrito.forEach((producto) => {
//   html += `<li>${producto}</li>`;
// });

// appContenedor.innerHTML = html;

carrito.map(producto => {
  return 'El producto es '+ producto
})

//Object.keys

const persona = { 
  nombre: 'Juan',
  profesion: 'Desarrollador web',
  edad: 500
}

console.log(Object.keys(persona))

