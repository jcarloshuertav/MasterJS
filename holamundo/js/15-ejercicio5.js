'use strict'

/*
MUESTRE TODOS LOS NUMEROS DIVISORES DE UN NUMERO INTRODUCE EN PROMPT
*/

var num = parseInt (prompt("Ingresa un numero", 1));

for(var i=1; i <= num; i++){
    if(num%i == 0){
        console.log("Divisor: "+i);
    }
}