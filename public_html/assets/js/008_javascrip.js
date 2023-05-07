/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function multiplicacion(a,b){
    return a*b;
}

function suma(a,b) {
    return a+b;
}

function divicion(a,b) {
    return a/b;
}

document.write("multiplicacion "+multiplicacion(5,5)+"<br>");
document.write("suma "+suma(5,5)+"<br>");

var operacion=0;

if(operacion==0) {
    document.write("multiplicacion " +multiplicacion(5,5)+"<br>");
}

else {
    document.write("suma " +multiplicacion(5,5));
}

operacion='+';

switch (operacion) {
    case '+': document.write("multiplicacion " +multiplicacion(5,5)); break;
    case '*': document.write("multiplicacion " +suma(5,5)); break;
    case '/': document.write("multiplicacion " +divicion(5,5)); break;
}

var unArray = ["Jennifer", "Juan Diego", "Santiago", "Oscar"];


function buscar(unArray,valor) {
    cont = 0;
    for (i = 0; i < unArray.length; i++) {
        if(unArray[i] == valor) {
            console.log("el valor se encuentra en el vector");
            cont++;
        } 
    }
    if(cont>0)  return unArray[i]
    return 0;
}

var nombre1="Santiago";
buscar(unArray,nombre1);


console.log("matrices");

var matriz = [["oTO","Juan David", "Emanuel"],
    ["Alirio","Santiago","Sebastian"]];

function printMatriz(a) {
    for (var i in a){
        console.log("row" + i);
        for (var j in a[i]) 
        {
            console.log(" "+a[i][j]);
        }
    }
}