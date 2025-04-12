//Inicializamos un aarelgo para almacenar las tareas
let tareas = [];

let tarea={
    nombre: "programar",
    estado: false
}

//funcion para mostrar un menu
function mostrarMenu(){
    return parseInt(prompt( 
    "Opciones disponibles: \n"+
    "1. Agregar tareas\n"+
    "2. Ver todas las tareas\n"+
    "3. Marcar una tarea como completada\n"+
    "4. Elige una opcion"  
    ));
}

function agregarTarea(){
    let nombre = prompt("Introduce el nombre de la tarea");
    if(nombre){
        let tarea = {
            nombre: nombre,
            completada: false
        };
        tareas.push(tarea);
        alert("Tarea agregada exitosamente");
    }else{
        alert("El nombre de la tarea no puede estar vacia")
    }
}

function verTareas(){
    if(tareas.length === 0){
        alert("No hay tareas en lista");
    }else{
        let mensaje = "Lista de tareas:\n";
        tareas.forEach((tarea,index)=>{
            mensaje += `${index+1} . ${tarea.nombre}[${tarea.completada ? "Completada": "Pendiente"}]\n`;
        });
        alert(mensaje);
    }
}

function marcarTareaCompletada(){
    console.log("En proceso");
}

//Funcion principal para manejar programa
function IniciarPrograma(){

    let condicion = true;
        while(condicion){
        let opcion = mostrarMenu();
        switch(opcion){
            case 1:
                agregarTarea();
                break;
            case 2:
                verTareas();
                break;
            case 3:
                marcarTareaCompletada();
                break;
            case 4:
                alert("Saliendo del programa");
                condicion = false;
                break;
            default:
                alert("Opcion no valida");
        }
    }alert("Programa finalizando con exito");
}

//Iniciar programa
IniciarPrograma();