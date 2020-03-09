let data = {user: 'Pepe', edad: 23, address: {calle: 'c/Pez', num: 3}};
console.log(typeof data, data)
let cadena = JSON.stringify(data)
console.log(typeof cadena, cadena)

let clon = {...data}
console.log(typeof clon, clon)
let newData = JSON.parse(cadena)
console.log(typeof newData, newData)

let deepClon = JSON.parse(JSON.stringify(data))