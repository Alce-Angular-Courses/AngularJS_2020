angular.module('miApp', [])
.controller('MainContoller', function () {
    this.nombre = 'Pepe'
    this.onClick = function () {
        this.nombre = ''
    }
})




