'use strict'
//FUNCIONES ANONIMAS
//ES UNA FUNCION QUE NO TIENE NOMBRE

function sumame(num1, num2, sumaYmuestra, sumaPorDos){
    var suma = num1 + num2;
    sumaYmuestra(suma);
    sumaPorDos(suma);

    return suma;
}

sumame(5,7,function(dato){
        console.log("La suma es: ", dato)
    },
    function(dato){
        console.log("La suma por dos es: ", (dato*2));
    }
);