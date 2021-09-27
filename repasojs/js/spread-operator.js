//Spread operator

let lenguajes = ['JavaScript', 'PHP', 'Python']
let frameworks =  ['AngularJS', 'Laravel', 'Django']

let combinacion1 = lenguajes.concat(frameworks) //Asi era antes

console.log('Asi era antes: '+combinacion1)

let combinacion2 = [...lenguajes,...frameworks]

console.log('Asi es la nueva forma: '+combinacion2)

