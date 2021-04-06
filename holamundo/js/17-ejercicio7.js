'use strict'

//TABLA DE MULTIPICAR DE UN NUMERO INTRODUCIDO EN PANTALLA

var num = parseInt (prompt("¿De que numero quieres la tabla?", 1));

document.write("<h1>Tabla del "+num+" </h1>")

for(var i = 1; i <= 10; i++){
    document.write(i+" x "+num+" = "+(i*num)+"<br/>");
}

//TODAS LAS TABLAS DE MULTIPLICAR
for(var c = 1; c <= 10; c++){
    document.write("<h1>Tabla del "+c+" </h1>")
    for(var i = 1; i <= 10; i++){
        document.write(i+" x "+c+" = "+(i*c)+"<br/>");
    }
}