function fechaYHora() {
    console.log("hoy es " + Date())
    alert("Mire la consola");
    alert("Bueno, siendo que es muy vago para abrirla... hoy es " + Date );
}
function pedirNombre() {
    let nombre1 = prompt("¿Cual es tu nombre?")
    let nombre2 = prompt("¿Cual es tu segundo nombre?")
    let nombre3 = prompt("¿Cual es tu apellido?")
    

    saludar2(nombre1, nombre2, nombre3)
    alert("Mire la consola");
}

// función normal:

// function saludar(p1, p2 = 1, p3 = 2) {
//     console.log("Hola, " + p1 + " " + p2 + " " + p3)
// }

// función flecha (arrow function):

let saludar2 = (p1, p2 = 1, p3 = 2) => {
    console.log("Hola, " + p1 + " " + p2 + " " + p3)
}


// function pruebas() {

//     let saludar = (p1, p2 = 1, p3 = 2) => {
//         console.log("hola " + p1 + ", " + p2 + ", " + p3)
//     }

//     function saludarAAlguien(nombre) {
//         return "Hola " + nombre
//     }

//     let saludarAAlguienArrow = (nombre2) => "Hoola " + nombre2;

//     // pasando de funcion clasica a funcion flecha :

//     //funcion clasica
//     function saludarAAlguien(nombre) {
//         return "Hola " + nombre
//     }

//     //sacar el function por el let, poner el igual antes del parametro, y poner la flecha antes del corchete
//     let saludarAAlguien = (nombre) => {
//         return "Hola " + nombre
//     }
//     // -opcional- sacar los parentesis del parametro cuando es uno solo (hay que dejarlo si o si cuando son mas de uno, o cuando no tiene parametros)
//     let saludarAAlguien = nombre => {
//         return "Hola " + nombre
//     }

//     // -opcional- sacar los corchetes (si tiene más de una expresion) y el return
//     let saludarAAlguien = nombre => "Hola " + nombre

// }

let sumarLosTres = (num1, num2, num3) => num1 + num2 + num3


let cuadrado = num => num * num
let area = (a, b) => a * b


let decirHola = () => {
    console.log('¡Hola!');
    console.log("como estas?");
}

let saludar = nombre => {
    if (nombre === undefined) {
        return "hola anónimo";
    } else {
        return "hola " + nombre;
    }
}

let nombreCompleto = (nombre, apellido) => {
    return `${nombre} ${apellido}`;
}
let exclamar = str => `str`
let mayusculas = str => str.toUpperCase()
let minusculas = str => str.toLowerCase()

/*
Salida por consola esperada:
 
console.log( nombreCompleto('Ada', 'Lovelace') ); // Ada Lovelace
console.log( exclamar('Hedy') ); // ¡Hedy!
console.log( mayusculas('grace') ); // GRACE
console.log( minusculas('SHERYL') ); // sheryl

*/