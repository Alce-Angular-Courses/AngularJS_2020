export class MainController {
    constructor($sce) {
        this.titulo = $sce.trustAsHtml('<i>Tareas</i><script>console.log("Te pille")</script>')
        this.listaTareas = []
        this.tarea
    }

    addTarea(){
        this.listaTareas.push(
            {
                nombre: this.tarea,
                isCompleted: false
            }
        )
        this.tarea = ''
        console.log(this.listaTareas)
    }

    borraTarea (i) {
        this.listaTareas.splice(i,1)
        console.log(this.listaTareas)
    }

    changeTarea () {
        // this.listaTareas[i].isCompleted = stado
        console.log(this.listaTareas)
    }
}
