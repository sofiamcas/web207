
/*
let numeroUsuario = prompt("Ingresa un numero");
    console.log(numeroUsuario + "Es: "+ typeof numeroUsuario)

if(numeroUsuario <=10){
    //sentencia true
    console.log("Genial");
}else{
    //sentencia false
    console.log("Muy mal");
}
*/


/*
let numero = prompt("Ingresa un numero");
if(numero == 10){
    console.log("Numero correcto y de tipo: "+ typeof numero)
}

let dato = prompt("Ingresa un dato:");
if(dato == 10){
    console.log("Numero correcto y de tipo:"+ typeof dato)
}else{
    console.log("Error por el tipo de dato que es:"+ typeof dato)
}
*/


/*
var dato1 = prompt("Ingresa Numero 1: ");
var dato2 = prompt("Ingresa Numero 2: ");

if(dato>dato2){
    console.log("El numero 1 es mayor y es: "+ dato1);
}else{
    console.log("El numero 2 es mayor y es: "+ dato2);
}
*/


var dato1 = prompt("Ingresa Numero 1: ");
var dato2 = prompt("Ingresa Numero 2: ");

if(dato>dato2){
    console.log("El numero 1 es mayor y es: "+ dato1);
}else if(dato2>dato1){
    console.log("El numero 2 es mayor y es: "+ dato2);
}else{
    console.log("Iguales");
}