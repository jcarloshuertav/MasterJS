'use strict'
//CONDICIONAL IF: Si A es igual a B haz algo
var edad = 18;
var nombre = 'Carlos';

if(edad >= 18) {
    console.log(nombre+" es MAYOR de edad, tiene "+edad+" años");
}else{
    console.log(nombre+" es MENOR de edad, tiene "+edad+" años");
}

/*OPERADORES LOGICOS
AND         &&
OR          ||
NEGACION    !
*/

var year = 2021;
//NEGACION
if (year != 2020) {
    console.log("El año no es 2020, realmente es "+year);
}
//AND
if(year >= 2000 && year <= 2025) {
    console.log("Estamos en la era actual");
}
//OR
if(year == 2011 || year >= 2021 && year == 2031) {
    console.log("El año acaba en 1");
}else{
    console.log("Año no registrado");
}