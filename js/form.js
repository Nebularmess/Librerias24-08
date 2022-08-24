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






