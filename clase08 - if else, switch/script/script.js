function bar() {
    alert("Hola, bienvenido al Bar");


    let edad = prompt("ingrese su edad");
    if (edad < 0) {
        alert("Error, su edad no es válida")
    }
    else {
        if (edad < 18) {
            alert("No puede pasar al bar.")
        }
        else {
            if (edad < 21) {
                alert("Puede pasar al bar, pero no puede tomar alcohol")
            }
            else {
                if (edad == 21) {
                    alert("¡Felicitaciones por haber llegado a la mayoría de edad!")
                }
                alert("Puede pasar al bar y tomar alcohol")
            }
        }
    }
    if ((edad % 2) != 0) {
        alert("Por cierto, ¿sabía que su edad es impar?")
    }
}
function traductor() {
    let word = prompt("ingrese una palabra de entre las siguientes: casa, perro, pelota, árbol o genio.").toLowerCase();
    switch (word) {
        case "casa": alert("House")
            break
        case "perro": alert("Dog")
            break
        case "pelota": alert("Ball")
            break
        case "arbol": alert("Tree")
            break
        case "genio": alert("Genius")
            break
        default: alert("La palabra que ingresó no es de las pedidas")

    }

}
function valoracionPelicula() {

    let x = prompt("¿Cómo valora la pelicula que acaba de ver? ingrese un número del 1 al 5 según lo siguiente: 1.Muy mala, 2.Mala, 3.Mediocre, 4.Buena, 5.Muy buena");

    switch (x.toLowerCase()) {
        case "1":
            alert("Lamentamos su mala experiencia, esperamos mejorar");
            alert("Gracias por su calificación")

            break
        case "2":
            alert("Lamentamos su mala experiencia, esperamos mejorar")
            alert("Gracias por su calificación")
            break
        case "3":
            alert("Lamentamos su mala experiencia, esperamos mejorar")
            alert("Gracias por su calificación")
            break
        case "4":
            alert("¡Qué bueno!")
            alert("Gracias por su calificación")
            break
        case "5":
            alert("¡Qué bueno!")
            alert("Gracias por su calificación")
            break
        default: alert("Ingrese un número del 1 al 5")
    }
}
