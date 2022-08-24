let eleccion = 2, eleccionTarj = 2, con = 0, bandera;
const tarjeta = document.getElementById ('card')
const tarjetaCreditoHTML = document.getElementById ('card-credito')
const denunciaDebito = document.getElementById ('denunciaDebito')
const denunciaCredito = document.getElementById ('denunciaCredito')
const lista = [];
function datosTarjeta (nombre, fechaNac, dni, banco, domicilio) {
    this.nombre = prompt ('ingrese su nombre');
    this.fechaNac = prompt ('ingrese su fecha de nacimiento');
    this.dni = prompt ('ingrese su dni');
    this.banco = prompt ('ingrese el nombre de su banco');
    this.domicilio = prompt ('ingrese su domicilio');
}
function denuncia () {
    eleccion = prompt ('Ingrese 1 para confirmar denuncia, 0 para desestimar')
    if (eleccion != 1 && eleccion != 0) {
        youShallNotPass ()
    }
    if (eleccion == 1) {
        bandera = true
    } else {
        bandera = false
    }
}
function denunciaDebitoEvento () {
    alert ('Su tarjeta ha sido denunciada, pongase en contacto con su banco para recibir información respectiva a la nueva')
    tarjeta.className = 'card-registrada-denunciada'
}
function denunciaCreditoEvento () {
    alert ('Su tarjeta ha sido denunciada, pongase en contacto con su banco para recibir información respectiva a la nueva.')
    tarjetaCreditoHTML.className = 'card-registrada-denunciada'
}
function youShallNotPass () {
    eleccion = prompt ('Opción equivocada : ingrese 1 para continuar, 0 para proceder a la siguiente instancia')
    while (eleccion != 0 && eleccion != 1) {
        eleccion = prompt ('Opción equivocada, vuelva a ingresar: 1 para continuar, 0 para proceder a la siguiente instancia que corresponda')
    }
    if (eleccion == 1) {
        bandera = true
    } 
    if (eleccion == 0) {
        bandera = false
    }
    if (eleccionTarj > 1 || eleccionTarj < 0) {
        eleccionTarj = eleccion
    }
}
eleccionTarj = prompt ('Bienvenido al simulador de Denuncia de Tarjetas ¿Desea denunciar su tarjeta de debito? Ingrese 1 para denunciar, Ingrese 0 para continuar con su tarjeta de credito')
if (eleccionTarj != 1 && eleccionTarj != 0) {
    youShallNotPass ()
}
if (eleccionTarj == 1) {
    alert ('Registremos su tarjeta debito')
    const tarjetaDebito = new datosTarjeta ();
    for (i = 0; i < 5; i++) {
        if (i == 0) {
            lista [i] = tarjetaDebito.nombre
        }
        if (i == 1) {
            lista [i] = tarjetaDebito.dni
        }
        if (i == 2) {
            lista [i] = tarjetaDebito.banco
        }
        if (i == 3) {
            lista [i] = tarjetaDebito.fechaNac
        }
        if (i == 4) {
            lista [i] = tarjetaDebito.domicilio
        }
        tarjeta.className = 'card-registrada'
        denunciaDebito.className = 'denunciaDebito__habilitado'
        tarjeta.innerHTML = `<h2 class= "card__titulo">TARJETA DEBITO</h2> <span class="card__elementos">Titular: ${tarjetaDebito.nombre}</span>  <span  class="card__elementos">Banco: ${tarjetaDebito.banco}</span> <span  class="card__elementos">Fecha de nacimiento: ${tarjetaDebito.fechaNac}</span> <span  class="card__elementos">DNI: ${tarjetaDebito.dni}</span> <span  class="card__elementOS">Domicilio: ${tarjetaDebito.domicilio}</span>`
    }
    alert ('usted ha ingresado los siguientes datos: ' + lista.join ("\n"))
    denunciaDebito.addEventListener('click', denunciaDebitoEvento)
    eleccion = prompt ('¿Desea denunciar su Tarjeta de credito? Ingrese 1 para continuar 0 para finalizar simulación')
    if (eleccion != 1 && eleccion != 0) {
        youShallNotPass ()
    }
    if (eleccion == 1) {
        bandera = true
    } else {
        bandera = false
    }
    if (bandera == true) {
        alert ('Registremos su Tarjeta de Credito')
        const tarjetaCredito = new datosTarjeta ();
        for (i = 0; i < 5; i++) {
            if (i == 0) {
                lista [i] = tarjetaCredito.nombre
            }
            if (i == 1) {
                lista [i] = tarjetaCredito.dni
            }
            if (i == 2) {
                lista [i] = tarjetaCredito.banco
            }
            if (i == 3) {
                lista [i] = tarjetaCredito.fechaNac
            }
            if (i == 4) {
                lista [i] = tarjetaCredito.domicilio
            }
            denunciaCredito.className = 'denunciaCredito__habilitado'
            tarjetaCreditoHTML.className = 'card-registrada'
            tarjetaCreditoHTML.innerHTML = `<h2 class= "card__titulo">TARJETA CREDITO</h2> <span class="card__elementos">Titular: ${tarjetaCredito.nombre}</span>  <span  class="card__elementos">Banco: ${tarjetaCredito.banco}</span> <span  class="card__elementos">Fecha de nacimiento: ${tarjetaCredito.fechaNac}</span> <span  class="card__elementos">DNI: ${tarjetaCredito.dni}</span> <span  class="card__elementOS">Domicilio: ${tarjetaCredito.domicilio}</span>`
        }
        alert ('usted ha ingresado los siguientes datos: ' + lista.join ("\n"))
        denunciaCredito.addEventListener('click', denunciaCreditoEvento)
    }
}
if (eleccionTarj == 0) {
    eleccion = prompt ('Proseguimos con su tarjeta de credito. Ingrese 1 si desea denunciar la misma; ingrese 0 para finalizar simulación')
    if (eleccion != 1 && eleccion != 0) {
        youShallNotPass ()
    }
    if (eleccion == 1 ) {
        bandera = true
    } else {
        bandera = false
    }
    if (bandera == true) {
        const tarjetaCredito = new datosTarjeta ();
        for (i = 0; i < 5; i++) {
            if (i == 0) {
                lista [i] = tarjetaCredito.nombre
            }
            if (i == 1) {
                lista [i] = tarjetaCredito.dni
            }
            if (i == 2) {
                lista [i] = tarjetaCredito.banco
            }
            if (i == 3) {
                lista [i] = tarjetaCredito.fechaNac
            }
            if (i == 4) {
                lista [i] = tarjetaCredito.domicilio
            }
            denunciaCredito.className = 'denunciaCredito__habilitado'
            tarjetaCreditoHTML.className = 'card-registrada'
            tarjetaCreditoHTML.innerHTML = `<h2 class= "card__titulo">TARJETA CREDITO</h2> <span class="card__elementos">Titular: ${tarjetaCredito.nombre}</span>  <span  class="card__elementos">Banco: ${tarjetaCredito.banco}</span> <span  class="card__elementos">Fecha de nacimiento: ${tarjetaCredito.fechaNac}</span> <span  class="card__elementos">DNI: ${tarjetaCredito.dni}</span> <span  class="card__elementOS">Domicilio: ${tarjetaCredito.domicilio}</span>`
        }
        alert ('usted ha ingresado los siguientes datos: ' + lista.join ("\n"))
        denunciaCredito.addEventListener('click', denunciaCreditoEvento)
    }
} 