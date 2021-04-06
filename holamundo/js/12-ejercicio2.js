'use strict'
/*
UTLIZANDO UN BUCLE, MOSTRAR LA SUMA Y LA MEDIA DE LOS NUMEROS INTRODUCIDOS HASTA INTRODUCIR UN NUEMRO NEGATIVO Y AHI MOSTRAR EL RESULTADO
*/

var suma = 0;
var contador = 0;

do{
    var numero = parseInt (prompt("Introduce numeros hasta que ingreses un negativo", 0));

    if(isNaN(numero)){ //Si no es un numero
        numero = 0
    }else if(numero >= 0){
        suma = suma + numero;
        //suma += numero;
        contador++;
    }

    console.log(suma +' | '+contador);
}while(numero >= 0);

alert("La suma de todos los numeros es: "+suma);
alert("La media de todos los numeros es: "+(suma/contador));