// class Libro {
//     constructor(titulo, autor, editorial, genero) {
//         this.titulo = titulo
//         this.autor = autor
//         this.editorial = editorial
//         this.genero = genero
//     }
//     mostrarLibro() {
//         console.log("Este libro tiene las siguientes propiedades: Nombre:" + this.titulo + ", Autor: " +  this.autor + ", Editorial: " + this.editorial + ", Genero: " + this.genero )
//     }
// }

class Auto {
    constructor(marca, modelo, añoFabricacion, cantPuertas) {
        this.marca = marca
        this.modelo = modelo
        this.añoFabricacion = añoFabricacion
        this.cantPuertas = cantPuertas
    }
    acelerar() {
        console.log("acelerando...")
    }
    subirVidrios() {
        console.log("subiendo vidrios...")
    }

}

class AutoGas extends Auto {
    constructor(marca, modelo, añoFabricacion, cantPuertas, mecanismo) {
        super(marca, modelo, añoFabricacion, cantPuertas)
        this.mecanismo = mecanismo
    }
    acelerar() {
        console.log("acelerando a " + this.mecanismo + "...")
    }
}
class AutoNafta extends Auto {
    constructor(marca, modelo, añoFabricacion, cantPuertas, mecanismo) {
        super(marca, modelo, añoFabricacion, cantPuertas)
        this.mecanismo = mecanismo
    }
    acelerar() {
        console.log("acelerando a " + this.mecanismo + "...")
    }

}
class AutoElectrico extends Auto {
    constructor(marca, modelo, añoFabricacion, cantPuertas, mecanismo) {
        super(marca, modelo, añoFabricacion, cantPuertas)
        this.mecanismo = mecanismo
    }
    acelerar() {
        console.log("acelerando a " + this.mecanismo + "...")
    }
}

let autoGas1 = new AutoGas("chevrolet", "corsa", 2008, 4, "gas")

let autoNafta1 = new AutoNafta("chevrolet", "corsa", 2008, 4, "nafta")

let autoelectrico1 = new AutoElectrico("chevrolet", "corsa", 2008, 4, "electricidad")




function cuantoParaSabado() {

    let date = new Date()
                  
    let day = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"]

    let diasParaSabado = 6 - date.getDay()


    alert("Hoy es " + day[date.getDay()] + ". Faltan " + diasParaSabado + " días para el sábado.")
}