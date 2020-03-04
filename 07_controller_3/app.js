/*  function MainContoller () {
    this.nombre = 'Pepe'
    this.onClick = function () {
        this.nombre = ''
    }
} */


class MainContoller {
    constructor() {}

    $onInit() {
         this.nombre = 'Pepe'
    }

    onClick() {
        this.nombre = ''
    }
}


angular.module('miApp', [])
.controller('MainContoller', MainContoller)



