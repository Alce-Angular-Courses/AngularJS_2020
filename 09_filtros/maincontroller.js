function MainController() {
    this.autor = 'Alejandro Cerezo'
    this.fecha = new Date()
    this.number = 3478.235612
    this.precio = 2000
}


angular.module('otraApp')
.controller('MainController', MainController)