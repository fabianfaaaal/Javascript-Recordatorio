//Promises
//Cuando realizas un llamado asincrono, como a una API, solamente hay dos opciones, que el codigo ejecute bien y funcione, o el llamado a la API falle. Con promises puedes manejar ambos escenarios.

const aplicarDescuento = new Promise((resolve, reject) => {
    setTimeout(() =>{
        let descuento = false;

        if(descuento){
            resolve('Descuento aplicado!')
        } else {
            reject('No se pudo aplicar el descuento')
        }
    }, 3000)
})

aplicarDescuento.then(resultado =>{
    console.log(resultado)
}).catch(error => {
    console.log(error)
})

