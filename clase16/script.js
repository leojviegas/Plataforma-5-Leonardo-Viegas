class Libro {
    constructor(titulo, autor, editorial, genero) {
        this.titulo = titulo
        this.autor = autor
        this.editorial = editorial
        this.genero = genero
    }
    mostrarLibro() {
        console.log("Este libro tiene las siguientes propiedades: Nombre:" + this.titulo + ", Autor: " +  this.autor + ", Editorial: " + this.editorial + ", Genero: " + this.genero )
    }
}

let libro1 = new Libro ("Harry Potter y la orden del fenix", "J.K. Rowling", "cuevana", "magia")
let libro2 = new Libro ("un pun. az. pál.", "Carl Sagan", "ediciones de la flor", "divulgacion científica")
let libro3 = new Libro ("El mundo y sus demonios", "Carl Sagan", "Editorial Critica", "ensayo")
let libro4 = new Libro ("H.P. y el pedo mágico", "J.K. Rowling", "mongolo", "magia")

let arrayLibros = [libro1, libro2, libro3, libro4]

function filtrarPorAutor (autorName) {
    let arraylibroFiltrado = arrayLibros.filter(function(libro) {
        return libro.autor == autorName
    })
    console.log(arraylibroFiltrado)
}

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




