const mainInput = document.querySelector(".mainInput");
const botonAgregar = document.querySelector(".botonAgregar");
const container = document.querySelector(".container");


class Item {
    constructor(nuevaTarea) {
        this.crearDiv(nuevaTarea);
    }
    crearDiv(nuevaTarea) {
        let item = document.createElement("div") //creo el item
        item.classList.add("item") //seteo atributos y clase

        let itemInput = document.createElement("input") //creo el input

        itemInput.setAttribute("type", "text");//seteo atributos y clase
        itemInput.setAttribute("disabled", "true");
        itemInput.classList.add("itemInput");
        itemInput.setAttribute("value", nuevaTarea);

        let botonEditar = document.createElement("button") //creo boton editar
        botonEditar.innerHTML = '<i class="fa-solid fa-lock"></i>'
        botonEditar.classList.add("botonEditar");

        let botonRemover = document.createElement("button") //creo boton remover
        botonRemover.innerHTML = '<i class="fa-solid fa-trash-can">'
        botonRemover.classList.add("botonRemover");

        item.appendChild(itemInput) //apendizo input y botones al container
        item.appendChild(botonEditar)
        item.appendChild(botonRemover)
        container.appendChild(item) //apendizo el item al container

        botonEditar.addEventListener("click", () => {
            itemInput.disabled = !itemInput.disabled

            if (itemInput.disabled == false) {
                botonEditar.innerHTML = "<i class='fas fa-lock-open'></i>";
               
                itemInput.select();

            } else {
                botonEditar.innerHTML = '<i class="fa-solid fa-lock"></i>'
            }
        })
        itemInput.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                botonEditar.click();
            }
        });

        botonRemover.addEventListener("click", () => {
            container.removeChild(item)
        })
    }
}

//con esta funcion  instancio la clase (creo el objeto)
function chequearInput() {
    let nuevaTarea = mainInput.value
    if (nuevaTarea != "") {

        new Item(nuevaTarea)
        mainInput.value = ""
    } else {

        alert("El campo no puede quedar vacío")
    }

}

//el 1er eventListener es para hacer click sobre el boton
//el 2do es para poder darle al Enter cuando tenes seleccionado el input
botonAgregar.addEventListener("click", chequearInput)
mainInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        botonAgregar.click();
    }
});


//esta función cambia el año del copyright al año actual, así siempre va a estar actualizado
function updateYear() {
    let yearSpan = document.getElementById("yearSpan")

    const currentYear = new Date().getFullYear();
    yearSpan.innerHTML = currentYear;
}
updateYear()