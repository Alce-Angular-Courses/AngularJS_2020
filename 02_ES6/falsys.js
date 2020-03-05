// Valores "falsy"
let x
if(x) {console.log('OK', x)}
x = false
if(x) {console.log('OK', x)}
x = 0
if(x) {console.log('OK', x)}
x = ''
if(x) {console.log('OK', x)}
x = null
if(x) {console.log('OK', x)}
x = NaN
if(x) {console.log('OK', x)}

// Valores "thrulys" 
x = true
if(x) {console.log('OK', x)}
x = 1
if(x) {console.log('OK', x)}
x = Infinity
if(x) {console.log('OK', x)}
x = 'Pepe'
if(x) {console.log('OK', x)}
x = []
if(x) {console.log('OK', x)}
x = {}
if(x) {console.log('OK', x)}