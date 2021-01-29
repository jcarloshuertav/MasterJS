'use strict'

var num1 = parseInt (prompt("Ingresa el primer numero"));
var num2 = parseInt (prompt("Ingresa el segundo numero"));
var op = parseInt (prompt("¿Que operacion desea realizar con los numeros que ingreso? \n1.Suma \n2.Resta \n3.Multiplicación \n4.División"));

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
    case 4:
        if(num2 == 0){
            alert("No puedes DIVIDIR entre cero");
        }else{
            var div = num1 / num2;
            alert("El resultado de la DIVISION es: "+div);
        }
    break;
    case 5:
        if(op==0 || op>4){
            alert("Error, selecciona una opción valida");
        }
    break;
    default:
        alert("Error, opción INVALIDA");
    break;
}