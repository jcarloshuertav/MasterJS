'use strict'

/*
HACER UN PROGRAMA QUE MUESTRE TODOS LOS NUMEROS ENTRE DOS NUMEROS INTRODUCIDOS POR EL USUARIO 
*/

var num1 = parseInt (prompt("Introduce el primer numero", 0));
var num2 = parseInt (prompt("Introduce el segundo numero", 0));

document.write("<h1>De "+num1+" a "+num2+" están estos numeros</h1>")
for(var i = num1; i <= num2; i++){
    document.write(i+"<br/>");
}