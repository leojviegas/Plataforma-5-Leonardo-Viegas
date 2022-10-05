const mainInput = document.querySelector(".mainInput");
const botonAgregar = document.querySelector(".botonAgregar");
const container = document.querySelector(".container");
let i = 0

class Item {
    constructor(x) {
        this.crearDiv(x);
    }
    crearDiv(y) {
        i++
        document.querySelector("h1").innerHTML = y;
    }
}










//con esta funcion de prueba instancio la clase (creo el objeto)
function instanciarDiv() {
    new Item(mainInput.value)
}


//el 1er eventListener es para hacer click sobre el boton
//el 2do es para poder darle al Enter cuando tenes seleccionado el input
botonAgregar.addEventListener("click", instanciarDiv)
mainInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        botonAgregar.click();
    }
});