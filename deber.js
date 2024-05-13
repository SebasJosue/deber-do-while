"use strict";

let contadorIntentos = 0;

let claveCajero = 3214;

do {

    contadorIntentos ++;

    let claveIngresada = Number(prompt("Ingresa clave"));

    if(claveIngresada === claveCajero) {
        
        alert("Clave correcta");

        break;
    }else{

        if(contadorIntentos >=3){

            alert("Clave incorrecta , tarjeta bloqueada");

            break;
        }
    }
}while (contadorIntentos <3);