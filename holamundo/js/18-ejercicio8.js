'use strict'

/**
 * CALCULADORA
 * -PIDA DOS NUMEROS POR PANTALLA
 * -SI METEMOS UNO MAL QUE NOS LO VUELVA A PEDIR
 * -EN EL CUERPO DE LA PAGINA EN UNA ALERTA Y CONSOLA EL RESULTADO DE SUMAR, RESTAR, MULTIPLICAR Y DIVIDIR ESAS 2 CIFRAS QUE PEDIMOS ANTERIORMENTE
 */

var num1 = parseInt (prompt("Ingresa el primer numero", 0));
var num2 = parseInt (prompt("Ingresa el segundo numero", 0));

while(num1 < 0 || num2 < 0 || isNaN(num1) || isNaN(num2)){
    var num1 = parseInt (prompt("Ingresa el primer numero", 0));
    var num2 = parseInt (prompt("Ingresa el segundo numero", 0));
}

var res =   "La suma es: "+(num1+num2)+"<br/>"+
            "La resta es: "+(num1-num2)+"<br/>"+
            "La multiplcación es: "+(num1*num2)+"<br/>"+
            "La división es: "+(num1/num2);

var resCMD =   "La suma es: "+(num1+num2)+"\n"+
            "La resta es: "+(num1-num2)+"\n"+
            "La multiplcación es: "+(num1*num2)+"\n"+
            "La división es: "+(num1/num2);

document.write(res);
alert(resCMD);
console.log(resCMD);