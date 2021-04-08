'use strict'

/**
 * FUNCIONES
 * UNA FUNCION ES UNA AGRUPACION REUTILIZABLE DE UN CONJUNTO DE INSTRUCCIONES
 */

//DEFINO LA FUNCION
function calculadora(num1, num2, mostrar = false){
    //CONJUNTO DE INSTRUCCIONES A EJECUTAR
    if(mostrar == false){
        console.log("SUMA: "+(num1+num2));
        console.log("RESTA: "+(num1-num2));
        console.log("MULTIPLICACION: "+(num1*num2));
        console.log("DIVISION: "+(num1/num2));
        console.log("* * * * * * * * * *");
    }else{
        document.write("SUMA: "+(num1+num2)+"<br>");
        document.write("RESTA: "+(num1-num2)+"<br>");
        document.write("MULTIPLICACION: "+(num1*num2)+"<br>");
        document.write("DIVISION: "+(num1/num2)+"<br>");
        document.write("* * * * * * * * * *<br>");
    }
}
//INVOCAR A LA FUNCION
calculadora(2,6, true);
calculadora(16,10,false);