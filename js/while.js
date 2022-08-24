let nroUsuario = 0
function numeros(numero) {
    numero = prompt ('ingrese un nro');
    nroUsuario = numero
    if (numero < 100) {
        while (numero < 100 && numero >= 0) {
            if (numero > 50 && numero< 100) {
                alert (numero + ' es mayor a 50')
            } else if (numero == 50) {
                alert (numero + ' casi pero no rey')
            } else {
                alert (numero + ' no es mayor a 50')
            }
            numero = prompt ('ingrese otro numero')
            nroUsuario = numero;
        }
    }
    
}
alert ('Ingresa un nro entre 0 y 99 y te dire si es mayor o menor a 50. Cuando desees dejar de ingresar números, para frenar la simulación ingresa un número negativo, en caso de que no desees ingresar ningún número, solo debes ingresar un número igual o superior a 100')
numeros
nroUsuario = prompt ('Ingrese un nro')
while (nroUsuario < 0) {
    alert ('El número que intenta ingresar es menor a 0, para finalizar el programa de esta forma debe ingresar AL MENOS UN número dentro del intervalo mencionado. En caso de que no desee ingresar ninguno, finalice el programa ingresando un valor de 100 o superior')
    nroUsuario = prompt ('Ingrese un nro')
}
if (nroUsuario < 100) {
    while (nroUsuario < 100 && nroUsuario >= 0) {
        if (nroUsuario > 50 && nroUsuario < 100) {
            alert (nroUsuario + ' es mayor a 50')
        } else if (nroUsuario == 50) {
            alert (nroUsuario + ' casi pero no rey')
        } else {
            alert (nroUsuario + ' no es mayor a 50')
        }
        nroUsuario = prompt ('Ingrese un nro')
        if (nroUsuario < 0) {
            alert ('No desea ingresar más números, fin de la simulación')
        }
        while (nroUsuario >=100) {
            if (nroUsuario >= 100) {
                alert ('Esta opción se encuentra habilitada únicamente al inicio del programa, para finalizar la simulación, ingrese un número menor a 0')
                nroUsuario = prompt ('Ingrese un nro')
            }
            if (nroUsuario < 0) {
                alert ('No desea ingresar más números, fin de la simulación')
            }
        }
    }
} else {
    alert ('No desea ingresar ningún nro. Fin de la simulación')
}
function numeros(numero) {
    numero = prompt ('ingrese un nro');
    if (numero > 50) {
        alert 
    }
}
