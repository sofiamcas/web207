/*
function saluda(){
    console.log("Hola Mundo");
}
saluda();

function despedida(nombre){
    console.log("Adios "+ nombre);
}
despedida("Sofía");

function operacion(numero){
    let a=56;
    let b=89.23;
    let calculo=(numero*a)/b;
    return calculo;
}
console.log(operacion(50));
*/


function suma(n1, n2){
    return parseInt(n1)+parseInt(n2);
}
let numero1 = prompt("Ingresa n1: ");
let numero2 = prompt("Ingresa n2: ");

let resultado = suma(numero1, numero2);
console.log("El total es: "+resultado)