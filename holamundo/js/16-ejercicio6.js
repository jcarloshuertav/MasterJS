'use strict'

/**
 * QUE NOS DIGA SI UN NUMERO ES PAR O INPAR.
 * 1. VENTANA PROMPT
 * 2. SI NO ES VALIDO QUE NOS PIDA DE NUEVO EL NUMERO
*/

var num = parseInt (prompt("Introduce un numero", 0));

while(isNaN(num)){
    num = parseInt (prompt("Introduce un numero", 0));
}

if(num % 2 == 0){
    alert("Es un numero PAR");
}else{
    alert("Es un numero INPAR");
}