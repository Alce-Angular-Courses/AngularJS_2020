function MainController() {
    this.listaTareas = []
    this.tarea
    this.addTarea = function (){
        this.listaTareas.push(
                {
                    nombre: this.tarea,
                    isCompleted: false
                }
            )
        this.tarea = ''
        console.log(this.listaTareas)
    }

    this.borraTarea = function(i) {
        this.listaTareas.splice(i,1)
        console.log(this.listaTareas)
    }

    this.changeTarea = function () {
        // this.listaTareas[i].isCompleted = stado
        console.log(this.listaTareas)
    }
}

angular.module('miApp')
.controller('MainController', MainController)