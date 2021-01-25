'use strict'
/*
PROGRAMA QUE PIDA DOS NUMEROS Y NOS DIGA CUAL ES EL MAYOR, EL MENOR Y SI SON IGUALES
PLUS: SI LOS NUMEROS NO SON NUMERO O MENORES O IGUALES A CERO, NOS VUELVA A SOLICITAR LOS DATOS
*/

var numero1 = parseInt (prompt("Ingresa el primer numero:", 0));
var numero2 = parseInt (prompt("Ingresa el segundo numero:", 0));

while(numero1 <= 0 || numero2 <=0 || isNaN(numero1 || isNaN(numero2))){
    numero1 = parseInt (prompt("Ingresa el primer numero:", 0));
    numero2 = parseInt (prompt("Ingresa el segundo numero:", 0));
}

if(numero1 == numero2) {
    alert("Los numeros son iguales");
}else if(numero1 > numero2){
    alert("El numero mayor es "+numero1+" y el numero menor es "+numero2);
}else if(numero2 > numero1){
    alert("El numero mayor es "+numero2+" y el numero menor es "+numero1);
}else{
    alert("Ingresa numeros correctos");
}