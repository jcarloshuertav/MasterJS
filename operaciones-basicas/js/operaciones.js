'use strict'

var num1 = parseInt (prompt("Ingresa el primer numero"));
var num2 = parseInt (prompt("Ingresa el segundo numero"));
var op = parseInt (prompt("¿Que operacion desea realizar? \n1.Suma \n2.Resta \n3.Multiplicación \n4.División"));

switch(op){
    case 1:
        var sum = num1 + num2;
        alert("El resultado de la SUMA es: "+sum);
    break;
    case 2:
        var res = num1 - num2;
        alert("El resultado de la RESTA es: "+res);
    break;
    case 3:
        var mul = num1 * num2;
        alert("El resultado de la MULTIPLICACION es: "+mul);
    break;
    case 2:
        var div = num1 / num2;
        alert("El resultado de la DIVISION es: "+div);
    break;
    default:
        alert("Operación invalida, selecciona una opción valida");
    break;
}