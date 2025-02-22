//TAREA: compare 3 numeros, si son iguales y cual es mayor

var dato1 = parseInt(prompt("Ingresa Número 1: "));
var dato2 = parseInt(prompt("Ingresa Número 2: "));
var dato3 = parseInt(prompt("Ingresa Número 3: "));

if (dato1 === dato2 && dato2 === dato3) {
    console.log("Los tres números son iguales: " + dato1);
} else {
    var mayor;

    if (dato1 >= dato2 && dato1 >= dato3) {
        mayor = dato1;
    } else if (dato2 >= dato1 && dato2 >= dato3) {
        mayor = dato2;
    } else {
        mayor = dato3;
    }
    
    console.log("El número mayor es: " + mayor);
}
