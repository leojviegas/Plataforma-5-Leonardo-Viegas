/*
Cadena de Caracteres
Creá una función llamada cadenaDeCaracteres que reciba un texto como parámetro.
La función deberá generar un array donde cada palabra será un nuevo elemento(no debe contar los espacios).

Posteriormente, deberá mostrar la siguiente información:

Número de palabras. 
Primera palabra.
Última palabra.
Toda está información se deberá mostrar a través de console.log de manera independiente.
*/

//EJ 1

function contadorDeCaracteres() {
    let texto = prompt("Introduzca un texto del largo que quiera (trate de solo incluir caracteres alfanuméricos)").toLowerCase();
    cadenaDeCaracteres(texto);

    function cadenaDeCaracteres(texto) {

        let arrayTexto = texto.split(" ");

        console.log("El array contiene " + arrayTexto.length + " palabras");//cantidad palabras
        console.log("La primer palabra es " + arrayTexto[0]);//primera
        console.log("La ultima palabra es " + arrayTexto[arrayTexto.length - 1]);//ultima palabra

        alert("Mire la consola")

    }
}


//EJ 2
function notasAlumnos() {

    let alumnos = [
        {
            nombre: "Mariano Damian",
            apellido: "Hernandez",
            notas: [8, 7, 9, 10, 6],
        },
        {
            nombre: "Ramiro",
            apellido: "Diaz",
            notas: [1, 3, 8, 2, 1],
        },
        {
            nombre: "Ana",
            apellido: "Armella",
            notas: [5, 7, 9, 4, 2],
        },
        {
            nombre: "Romina",
            apellido: "Almeda",
            notas: [10, 6, 7, 5, 9],
        },
        {
            nombre: "Denis",
            apellido: "Tolaba",
            notas: [10, 10, 9, 9, 10],
        },
        {
            nombre: "Hugo",
            apellido: "Castellano",
            notas: [2, 3, 3, 6, 1],
        },
        {
            nombre: "Analia Daiana",
            apellido: "Fonseca",
            notas: [4, 3, 4, 5, 2],
        },
        {
            nombre: "Francisco Daniel",
            apellido: "Samir",
            notas: [5, 5, 6, 4, 2],
        },
    ];
    let estado = prompt("Indique si quiere ver a los aprobados o a los desaprobados, escribiendo 'aprobado' o 'desaprobado'").toLowerCase();

    if (estado != "aprobado" && estado != "desaprobado") {
        while (estado != "aprobado" && estado != "desaprobado") {
            estado = prompt("Por favor, introduzca solamente 'aprobado' o 'desaprobado'").toLowerCase()
        }
    } else {
        promedio(alumnos, estado)
    }

    function promedio(alumnos, estado) {
        for (let i = 0; i < 8; i++) {
            let promedio = 0;
            let suma = 0;

            for (let h = 0; h < 5; h++) {
                suma += alumnos[i].notas[h];
            }
            promedio = suma / 5;

            if (promedio >= 6) {
                alumnos[i].evaluacion = "aprobado";
                alumnos[i].promedio = promedio;
            }
            else {
                alumnos[i].evaluacion = "desaprobado";
                alumnos[i].promedio = promedio;
            }
        }

        if (estado == 'aprobado') {
            for (let k = 0; k < alumnos.length; k++) {
                if (alumnos[k].evaluacion == "aprobado") {
                    let key = "Nombre Completo: " + alumnos[k].nombre + ' ' + alumnos[k].apellido + " ";
                    console.log(key + " Promedio: " + alumnos[k].promedio + " Estado: " + estado)
                }
            }
        } else if (estado == 'desaprobado') {
            for (let k = 0; k < alumnos.length; k++) {
                if (alumnos[k].evaluacion == "desaprobado") {
                    let key = "Nombre Completo: " + alumnos[k].nombre + ' ' + alumnos[k].apellido + " ";
                    console.log(key + alumnos[k].promedio + " Estado: Desaprobado")
                }
            }
        }
        alert("Mire la consola (con F12)")
    }
}

//EJ 3

function tempConverter() {

    let inputUser = prompt("Convierta de Celsius a Fahrenhieit o viceversa").toLowerCase();


    let arrayTemp = inputUser.split("º");
    let temp = Number(arrayTemp[0]);
    let escala = arrayTemp[1];

    if (escala == "c") {
        temp = (temp * 9 / 5) + 32;
        alert(Math.round(temp) + "ºF");

        temp = (temp - 32) * 5 / 9; //acá hacemos la cuenta inversa, para volver a tener el valor en celsius y seguir trabajando con eso
    }
    else {
        temp = (temp - 32) * 5 / 9;
        alert(Math.round(temp) + "ºC");
    }

    if (temp >= -10 && temp <= 0) {
        alert("Temperatura baja");
    } else if (temp >= 1 && temp <= 20) {
        alert("Temperatura adecuada");
    } else if (temp >= 21 && temp <= 35) {
        alert("Temperatura alta");
    } else {
        alert("Temperatura desconocida");
    }


}