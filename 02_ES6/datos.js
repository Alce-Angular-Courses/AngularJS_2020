'use strict'
console.log('Datos en JS')

const EMPRESA = 'CAS'

let x
console.log(typeof x)
x = 5
console.log(typeof x)
x = 'Pepe'
console.log(typeof x)
x = true
console.log(typeof x)
x = [1,2,3]
console.log(typeof x)
x = {user: 'Pepe', edad: 23}
console.log(typeof x)

{
    let y = 9
    y = 10
    console.log(y)
}

const z = 8
// z = 7 daría error

const o = {user: 'Juana', edad: 25}
console.log(o)

// o = 26 daría error
// console.log(o)

// strings

let cadena_saludo = "Hola Amigo"
let cadenaSaludo = 'Hola Amigo' // buena pactica
console.log(cadenaSaludo)

// ES6 template string

console.log(`Hola, soy ${o.user} y tengo ${o.edad} años`)

// Numbers

console.log('Pepe'*5)
console.log(-8/0)