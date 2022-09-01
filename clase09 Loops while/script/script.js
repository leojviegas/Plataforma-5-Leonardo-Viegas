function reloj() {

    let minutosLimite = 2
    let minutero = 0
    let segundosLimite = 60
    let segundero = 0
    while (minutero <= minutosLimite) {
        while (segundero < segundosLimite) {
            if (minutero == 1 && segundero != 1) {
                console.log(minutero + " minuto, " + segundero + " segundos.")
            }
            if (minutero == 1 && segundero == 1) {
                console.log(minutero + " minuto, " + segundero + " segundo.")
            }
            if (minutero != 1 && segundero == 1) {
                console.log(minutero + " minutos, " + segundero + " segundo.")
            }
            if (minutero != 1 && segundero != 1) {
                console.log(minutero + " minutos, " + segundero + " segundos.")
            }


            segundero++
        }
        segundero = 0
        minutero++
    }
    alert("Mire la consola! (con F12)")
}

function multiploDe20() {
    let num = 1
    while (num <= 20) {
        if (!(num % 4)) {
            console.log(num)
        }
        num++
    }
    alert("Mire la consola! (con F12)")
}
function numEntre10Y19() {

    numero = -10

    while (numero <= 19) {
        console.log(numero);
        numero++;
    }
    alert("Mire la consola! (con F12)")
}

function paresEntre10Y40() {

    numero = 10
    while (numero <= 40) {
        if (numero % 2 == 0) {
            console.log(numero);
        }
        numero++;

    }
    alert("Mire la consola! (con F12)")
}

function numDivPor5Y3() {

    numero = 5
    while (numero <= 50) {
        if (numero % 3 == 0 && numero % 5 == 0) {
            console.log(numero);
        }
        numero++;

    }
    alert("Mire la consola! (con F12)")
}




function ParOImpar() {

    let inputUser = 1

    while (inputUser > 0) {

        inputUser = parseInt(prompt("Introduzca un número mayor a 0 "))

        if (inputUser % 2 == 0) {
            alert("Este número es par")
        } else {
            alert("Este número es impar")
        }

    }

    alert("introdujo un número incorrecto, recargue la página");
}

function fizzBuzz() {

    let numero = 1

    while (numero <= 100) {

        if (numero % 3 == 0 || numero % 5 == 0) {

            if (numero % 3 == 0 && numero % 5 == 0) {
                console.log("FizzBuzz")
            }
            else {
                if (numero % 3 == 0) {
                    console.log("Fizz")
                }
                else {
                    console.log("Fizz")
                }
            }


        }
        else {
            console.log(numero)
        }

        numero++
    }
    alert("Mire la consola! (con F12)")
}

function numerosPrimos() {

    let rangeStart = parseInt(prompt("Introduzca desde qué numero quiere empezar buscar números primos"))
    let rangeEnd = parseInt(prompt("Ahora introduzca hasta qué numero"))
    let noPrimeFound = true

    if (rangeStart > 0 && rangeStart < rangeEnd) {
        let x = rangeStart
        while (x <= rangeEnd) {
            i = 2
            while (i < x) {
                if (x % i != 0) {
                    i++
                }
                else {
                    x++
                    i = 2
                }
            }
            if (x <= rangeEnd && x != 1) {
                console.log(x)
                noPrimeFound = false
            }
            x++
        }
        if (noPrimeFound == false) {
            alert("Mire la consola! (con F12)")
        }
        else {
            alert("No se encontró ningún número primo en ese rango")
        }
    } else {
        alert("El primer número debe ser mayor a 0 y menor al segundo")
    }
}

function contadorPositivos() {

    let contador = 0;
    let x = parseInt(prompt("Introduzca un número positivo"))

    while (x > 0) {
        contador++;
        x = parseInt(prompt("Introduzca otro número positivo"))
    }
    alert("Solo números positivos! Ha ingresado " + contador + " números positivos en total")
}

function burro() {
    let respuesta = prompt("¿Ya llegamos a Muy Muy lejano?").toLowerCase()

    while (respuesta != "si") {
        respuesta = prompt("¿Ya merito?").toLowerCase()
    }

    alert("Bienvenido a Muy Muy Lejano, Burro!")
}


function cualEsElMayor() {

    let n1 = 1
    let n2 = 2

    while (n1 != 0 && n2 != 0) {
        n1 = parseInt(prompt("Introduzca un número (que no sea 0)"))
        if (n1 != 0) {
            n2 = parseInt(prompt("Introduzca otro distinto (que no sea 0)"))
            if (n2 != 0) {
                if (n1 != n2) {

                    if (n1 > n2) {
                        alert("El número mayor es " + n1)
                    } else {
                        alert("El número mayor es " + n2)
                    }
                } else {
                    alert("Ambos números deben ser distintos")
                }
            } else {
                alert("Ha ingresado 0. El programa terminará")
            }
        } else {
            alert("Ha ingresado 0. El programa terminará")
        }
    }
}

function piedraPapelTijera() {
    let loop = true
    userScore = 0
    pcScore = 0

    while (loop == true) {


        let x = Math.floor((Math.random()) * 3 + 1);
        let inputUser = prompt("Elige: Piedra, papel o tijera").toLowerCase();

        if (inputUser != "piedra" && inputUser != "papel" && inputUser != "tijera")
            while (inputUser != "piedra" && inputUser != "papel" && inputUser != "tijera") {
                alert("No elegiste ninguna de las opciones dadas")
                inputUser = prompt("Elige: Piedra, papel o tijera").toLowerCase();
            }

        if (inputUser == "piedra") {
            switch (x) {
                case 1: alert("Tú: Piedra \nComputadora: Piedra\n\nEmpate!")
                    break
                case 2: alert("Tú: Piedra \nComputadora: Papel\n\nPerdiste!")
                    pcScore++
                    break
                default: alert("Tú: Piedra \nComputadora: Tijera\n\nGanaste!")
                    userScore++
            }
        }
        if (inputUser == "papel") {
            switch (x) {
                case 1: alert("Tú: Papel \nComputadora: Piedra \n\nGanaste!")
                    userScore++
                    break
                case 2: alert("Tú: Papel \nComputadora: Papel \n\nEmpate!")
                    break
                default: alert("Tú: Papel \nComputadora: Tijera \n\nPerdiste!")
                    pcScore++
            }
        }
        if (inputUser == "tijera") {
            switch (x) {
                case 1: alert("Tú: Tijera \nComputadora: Piedra\n\nPerdiste!")
                    pcScore++
                    break
                case 2: alert("Tú: Tijera \nComputadora: Papel\n\nGanaste!")
                    userScore++
                    break
                default: alert("Tú: Tijera \nComputadora: Tijera\n\nEmpate!")
            }
        }

        let volverAJugar = prompt("Deseas volver a jugar? \nResponda con 'Si'  o con 'No' ").toLowerCase()

        while (volverAJugar !== "si" && volverAJugar !== "no") {
            alert("Por favor, responda solo con 'si' o con 'no' ")
            volverAJugar = prompt("Desea volver a jugar? \nResponda con 'Si'  o con 'No' ").toLowerCase()
        }
        if (volverAJugar == "no") {
            loop = false
            alert("Tu puntaje: " + userScore + "\n" + "Computadora: " + pcScore )
        }
    }
}

function adivinaNumero() {

    let n = parseInt(prompt("ingrese un número que esté entre el 1 y el 10"))
    if (n < 1 || n > 10) {
        while (n < 1 || n > 10) {
            alert("Error. Número fuera de rango")
            n = parseInt(prompt("ingrese un número que esté entre el 1 y el 10"))
        }
    }
    if (isNaN(n)) {
        while (isNaN(n)) {
            alert("Error. Introduzca solo caracteres numéricos")
            n = parseInt(prompt("ingrese un número que esté entre el 1 y el 10"))
        }
    }

    let r = Math.floor((Math.random()) * n + 1);
    let c = 1
    let x = parseInt(prompt("El programa ha generado un numero al azar entre 1 y el valor que introdujo. Intente adivinar cuál es"))

    while (x != r) {
        if (r > x) {
            x = parseInt(prompt("No, es mayor. Intente de nuevo"))
            c++
        } if (r < x) {
            x = parseInt(prompt("No, es menor. Intente de nuevo"))
            c++
        }
    }
    if (c == 1) {
        alert("Felicidades! Lo ha adivinado a la primera!")
    } else {
        alert("Felicidades! Lo ha adivinado en " + c + " intentos.")
    }
}

let c = 0
let n1 = 0
let n2 = 0
let n3 = 0
let n4 = 0
let n5 = 0
function bienvenidaParaN() {
    if (c == 0) {
        let n = parseInt(prompt("¡Hay una fiesta de números en la consola! ingrese un numero cualquiera para que ingrese a la fiesta y luego mire la consola"))
        console.log("Bienvenido, " + n + "!")
        n1 = n
        c++
    }
    else if (c == 1) {
        let n = parseInt(prompt("¡Hay una fiesta de números en la consola! ingrese un numero cualquiera para que ingrese a la fiesta y luego mire la consola"))
        console.log("Bienvenido, " + n + "! Te presento a " + n1)
        n2 = n
        c++
    }
    else if (c == 2) {
        let n = parseInt(prompt("¡Hay una fiesta de números en la consola! ingrese un numero cualquiera para que ingrese a la fiesta y luego mire la consola"))
        console.log("Bienvenido, " + n + "! Te presento a " + n1 + " y a " + n2)
        n3 = n
        c++
    }
    else if (c == 3) {
        let n = parseInt(prompt("¡Hay una fiesta de números en la consola! ingrese un numero cualquiera para que ingrese a la fiesta y luego mire la consola"))
        console.log("Bienvenido, " + n + "! Te presento a " + n1 + ", a " + n2 + " y a " + n3)
        n4 = n
        c++
    }
    else if (c == 4) {
        let n = parseInt(prompt("¡Hay una fiesta de números en la consola! ingrese un numero cualquiera para que ingrese a la fiesta y luego mire la consola"))
        console.log("Bienvenido, " + n + "! Te presento a " + n1 + ", a " + n2 + ", a " + n3 + " y a " + n4)
        n5 = n
        c++
    }
    else if (c == 5) {
        alert("Lo siento, la fiesta de números ha alcanzado la capacidad máxima de 5 números por protocolo covid")
    }
}

function productoAcumulado() {

    let n = parseInt(prompt("Este programa calculará el producto de todos los enteros entre 1 y un número elegido por usted (esto también se conoce como factorial). Escriba un número mayor a 1:"))

    if (n < 1) {
        while (n < 1) {
            n = parseInt(prompt("Error. Número menor a 1. Escriba un número mayor a 1"))
        }
    }
    let p = 1
    let i = 0
    while (i < n) {
        i++
        p *= i;
    }
    console.log(p)
    alert("Mire la consola! (con F12)")
}
