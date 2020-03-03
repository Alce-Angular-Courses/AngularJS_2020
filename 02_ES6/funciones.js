

// declaracion
function suma (a,b) {
    return a + b
}

// asignacion

const resta = function (a, b) {
    return a - b 
}

console.log(suma(2,6))
console.log(resta(6,7))

// ES6 Arrow Functions o Lambdas


// const prod = (a,b) => { return a*b}
const prod = (a,b) => a*b
const cuadrado = a => a*a

console.log(prod(6,5))
console.log(cuadrado(9))

console.log(prod)


setTimeout( () => console.log('Pintando'), 2000)

const datos = [6, 7, 5, 3]

const cuadrados = datos.map(item => item*item)

console.log(cuadrados)

let aDatos = [45, 67, 89, 34]
console.log(media (2, 4, 6, 8, 4, 8), media(...aDatos))



function media(...data) {
    let total = data.reduce( (a,b) => {return a+b})
    return total/data.length
}
