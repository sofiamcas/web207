function agregarProducto(){
    let nombreProducto = prompt("Introduce el nombre del producto: ");
    let cantidadProducto = parseInt(prompt("La cantidad del producto"));
    let precioProducto = parseInt(prompt("Introduce el precio del producto"));
    
    if(cantidadProducto > 0 && precioProducto > 0){
        let producto = {
            nombre: nombreProducto,
            cantidad: cantidadProducto,
            precio: precioProducto
        };
        inventario.push(producto);
        alert("Producto agregado");
    }else{
        alert("Cantidad y precio tiene que ser positivo");
    }
    
}

function mostrarProducto(){
    if(inventario.length == 0){
        alert("No tenemos producto en el inventario")
    }else{
        let mensaje = "Productos en el inventario: ";

        for(let i = 0; i< inventario.length; i++){
            mensaje+= `Producto ID: ${i+1} \n`+
                      `Nombre: ${inventario[i].nombre} \n`+
                      `Cantidad: ${inventario[i].cantidad}\n`+
                      `Precio: ${inventario[i].precio}\n`+
                      "------------------------------------\n";                    
        }
        alert(mensaje);
    }
}

function buscarProducto(){
    if(inventario.length == 0){
        alert("El inventario está vacío");
        return;
    }

    let nombreBuscar = prompt("Introduce el nombre del producto a buscar:");
    let encontrados = inventario.filter(producto => producto.nombre.toLowerCase() === nombreBuscar.toLowerCase());

    if(encontrados.length > 0){
        let mensaje = "Producto(s) encontrado(s):\n\n";
        for(let i = 0; i < encontrados.length; i++){
            let p = encontrados[i];
            mensaje += `${p.nombre} - Cantidad: ${p.cantidad}, Precio: $${p.precio}\n`;
        }
        alert(mensaje);
    }else{
        alert("No se encontró ningún producto con ese nombre");
    }
}

let inventario = [];

function mostrarMenu(){
    return parseInt(prompt(
        "Opcion disponibles: \n"+
        "1. Agregar producto \n"+
        "2. Mostrar todos los productos \n"+
        "3. Buscar por nombre \n"+
        "4. Salir \n"+
        "Elige una opcion: "
    ));
}

function IniciarPrograma(){
    let continuar = true;
    while(continuar){
        let opcion = mostrarMenu();
        switch(opcion){
            case 1:
                agregarProducto();
                break;
            case 2:
                mostrarProducto();
                break;
            case 3:
                buscarProducto();
                break;
            case 4:
                alert("Saliendo del programa");
                continuar = false;
                break;
            default:
                alert("opcion no valida. Intente de nuevo");
        }
    }


}

IniciarPrograma();
