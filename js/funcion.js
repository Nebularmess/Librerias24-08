let nombre = "", dni = 0, fechaNac = "", domicilio = "", banco = "", eleccion = 0; eleccionTarj = 0; eleccionCred = 0;
function datos () {
    dni = prompt ('Ingrese su dni sin puntos')
    nombre = prompt ('Ingrese su nombre')
    banco = prompt ('Ingrese su banco')
    fechaNac = prompt ('Ingrese su fecha de nacimiento')
    domicilio = prompt ('Ingrese su domicilio')
    eleccion = prompt ('¿Confirma la denuncia de la tarjeta perteneciente al banco ' + banco + ' a nombre de ' + nombre + '? Ingrese 1 para confirmar o 0 para desestimar denuncia')
    while (eleccion != 0 && eleccion != 1) {
            eleccion = prompt ('Opción equivocada vuelva a ingresar: 1 para confirmar denuncia, 0 para desestimarla.')
    }
    if (eleccion == 1) {
        alert ('Su tarjeta ha sido denunciada, pongase en contacto con su banco para recibir información respectiva a la nueva')
    }
    if (eleccion == 0) {
        alert ('Denuncia desestimada')
    }
}

eleccionTarj = prompt ('Bienvenido al simulador de Denuncia de Tarjetas ¿Desea denunciar su tarjeta de debito? Ingrese 1 para denunciar, Ingrese 0 para continuar con su tarjeta de credito')
while (eleccionTarj != 0 && eleccionTarj != 1) {
    eleccionTarj = prompt ('Ingreso una opción incorrecta. Ingrese 1 para denunciar su tarjeta de debito, Ingrese 0 para continuar con su tarjeta de credito')
}
if (eleccionTarj == 1) {
    datos ()
    eleccionCred = prompt ('Proseguimos con su tarjeta de credito, ingrese 1 para continuar, Ingrese 0 para finalizar simulación')
    while (eleccionCred != 0 && eleccionCred != 1) {
        eleccionCred = prompt ('Ingreso una opción incorrecta. Ingrese 1 para denunciar su tarjeta de credito, Ingrese 0 para finalizar la simulación')
    }
    if (eleccionCred == 1) {
        datos ()
    }
}
if (eleccionTarj == 0) {
    eleccionCred = prompt ('Proseguimos con su tarjeta de credito, ingrese 1 para continuar, Ingrese 0 para finalizar simulación')
    while (eleccionCred != 0 && eleccionCred != 1) {
        eleccionCred = prompt ('Ingreso una opción incorrecta. Ingrese 1 para denunciar su tarjeta de credito, Ingrese 0 para finalizar programa')
    }
    if (eleccionCred == 1) {
        datos ()
    }
}
alert ('Fin de la simulación!');
