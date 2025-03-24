let num1= prompt("Ingresa num1");
let num2= prompt("Ingresa num2");

//suma
function suma(num1, num2){
    return parseInt(num1)+parseInt(num2);
}
let resultadosum = suma(num1, num2);
console.log("total suma "+resultadosum)

//resta
function resta(num1, num2){
    return parseInt(num1)-parseInt(num2);
}
let resultadoresta = resta(num1, num2);
console.log("total resta "+resultadoresta)

//multiplicacion
function multiplicacion(num1, num2){
    return parseInt(num1)*parseInt(num2);
}
let resultadomultiplicacion = multiplicacion(num1, num2);
console.log("total multiplicacion "+resultadomultiplicacion)

//division
function division(num1, num2){
    return parseInt(num1)/parseInt(num2);
}
let resultadodivision = division(num1, num2);
console.log("total division "+resultadodivision)

//Switch
let opcion = parseInt(prompt(`
    Operacion:
    1. Suma
    2. Resta
    3. Multiplicacion
    4. Division
    `));
switch(opcion){
    case 1:
        console.log(`La suma es: ${suma(num1, num2)}`);
    break;

    case 2:
        console.log(`La resta es: ${resta(num1, num2)}`);
    break;

    case 3:
        console.log(`La multiplicacion es: ${multiplicacion(num1, num2)}`);
    break;

    case 4:
        console.log(`La division es: ${division(num1, num2)}`);
    break;
}
