let tarjDebito = []
let tarjCred = []
const tarjeta = document.getElementById ('card')
const nombre = document.getElementById ('nombre')
const fechaNac = document.getElementById ('fechaNac')
const domicilio = document.getElementById ('domicilio')
const banco = document.getElementById ('banco')
const dni = document.getElementById ('dni')
const boton = document.getElementById ('boton')
const denunciaDebito = document.getElementById ('denunciaDebito')
const denunciaCredito = document.getElementById ('denunciaCredito')
const tarjetaCreditoHTML = document.getElementById ('card-credito')
const nombreCred = document.getElementById ('nombreCred')
const fechaNacCred = document.getElementById ('fechaNacCred')
const domicilioCred = document.getElementById ('domicilioCred')
const bancoCred = document.getElementById ('bancoCred')
const dniCred = document.getElementById ('dniCred')
const botonCred = document.getElementById ('botonCred')

function datosTarjetaDebito (nombre, fechaNac, domicilio, banco,dni) {
    tarjDebito.push({nombre, fechaNac, domicilio, banco, dni})
    JsonTarjDebito = JSON.stringify(tarjDebito)
    localStorage.setItem('datosDeb',JsonTarjDebito)
}
boton.addEventListener('click', function () {
    datosTarjetaDebito(nombre.value, fechaNac.value, domicilio.value, banco.value, dni.value)
    tarjeta.innerHTML = `<h2 class= "card__titulo">TARJETA DEBITO</h2> <span class="card__elementos">Titular: ${tarjDebito[0].nombre}</span>  <span  class="card__elementos">Banco: ${tarjDebito[0].banco}</span> <span  class="card__elementos">Fecha de nacimiento: ${tarjDebito[0].fechaNac}</span> <span  class="card__elementos">DNI: ${tarjDebito[0].dni}</span> <span  class="card__elementOS">Domicilio: ${tarjDebito[0].domicilio}</span>`
    tarjeta.className = 'card-registrada'
    denunciaDebito.className = 'denunciaDebito__habilitado'
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    Toast.fire({
        icon: 'success',
        title: 'Tarjeta registrada correctamente'
  })
})
function datosTarjetaCredito(nombre, fechaNac, domicilio, banco,dni) {
    tarjCred.push({nombre, fechaNac, domicilio, banco, dni})
    JsonTarjCred = JSON.stringify(tarjCred)
    localStorage.setItem('datosCredito',JsonTarjCred)
}
botonCred.addEventListener('click', function () {
    datosTarjetaCredito(nombreCred.value, fechaNacCred.value, domicilioCred.value, bancoCred.value, dniCred.value)
    tarjetaCreditoHTML.innerHTML = `<h2 class= "card__titulo">TARJETA CREDITO</h2> <span class="card__elementos">Titular: ${tarjCred[0].nombre}</span>  <span  class="card__elementos">Banco: ${tarjCred[0].banco}</span> <span  class="card__elementos">Fecha de nacimiento: ${tarjCred[0].fechaNac}</span> <span  class="card__elementos">DNI: ${tarjCred[0].dni}</span> <span  class="card__elementOS">Domicilio: ${tarjCred[0].domicilio}</span>`
    denunciaCredito.className = 'denunciaCredito__habilitado'
    tarjetaCreditoHTML.className = 'card-registrada'
     
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    Toast.fire({
        icon: 'success',
        title: 'Tarjeta registrada correctamente'
  })
})
function denunciaDebitoEvento () {
    Swal.fire({
        title: '¿Desea denunciar su tarjeta de debito?',
        text: "La denuncia inhabilita de forma PERMANENTE su tarjeta",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Denunciar!'
      }).then((result) => {
        if (result.isConfirmed) {
        tarjeta.className = 'card-registrada-denunciada'  
          Swal.fire(
            'Tarjeta Denunciada',
            'Pongase en contacto con su banco para coordinar entrega de la nueva',
            'Fin de la denuncia'
          )
        }
      })
}
function denunciaCreditoEvento () {
    Swal.fire({
        title: '¿Desea denunciar su tarjeta de credito?',
        text: "La denuncia inhabilita de forma PERMANENTE su tarjeta",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Denunciar!'
      }).then((result) => {
        if (result.isConfirmed) {
        tarjetaCreditoHTML.className = 'card-registrada-denunciada'  
          Swal.fire(
            'Tarjeta Denunciada',
            'Pongase en contacto con su banco para coordinar entrega de la nueva',
            'Fin de la denuncia'
          )
        }
      })
}
denunciaDebito.addEventListener('click', denunciaDebitoEvento)
denunciaCredito.addEventListener('click', denunciaCreditoEvento)










/* const tarjeta = document.getElementById ('card')
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
}  */