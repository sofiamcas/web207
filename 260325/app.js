const frutas = [];

const fruta = prompt("Que fruta deseas comprar");

frutas.push(fruta);

while(confirm("¿Desea agregar otra fruta?")){
    const fruta = prompt("¿Qué fruta quieres agregar?");
    frutas.push(fruta);
}
console("Usted compró: ");
for(let fruta of frutas){
    console.log(fruta);
}