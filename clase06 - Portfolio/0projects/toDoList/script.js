const input = document.querySelector(".input");
const botonAgregar = document.querySelector(".botonAgregar");
const container = document.querySelector(".container");

class Item {
  constructor(nuevaTarea) {
    this.crearDiv(nuevaTarea);
  }
  crearDiv(userInputText) {
    const container = document.querySelector(".container"); //agarro el div "container"
    const inputItem = document.createElement("input");
    inputItem.setAttribute("type", "text");
    inputItem.setAttribute("disabled", "true");
    inputItem.classList.add("itemInput");
    inputItem.setAttribute("value", nuevaTarea);

    const divItem = document.createElement("div")
    divItem.classList.add("item");

    const botonEditar = document.createElement("button")
    botonEditar.innerHTML = '<i class="fa-solid fa-lock"></i>'
    botonEditar.classList.add("botonEditar");

    const botonRemover = document.createElement("button")
    botonRemover.innerHTML = '<i class="fa-solid fa-trash-can">'
    botonRemover.classList.add("botonRemover");

    divItem.appendChild(inputItem);
    divItem.appendChild(botonEditar);
    divItem.appendChild(botonRemover);
    container.appendChild(divItem);

    botonEditar.addEventListener("click", () => {
      // inputItem.setAttribute("disabled", "false");
      !input.disabled
      botonEditar.innerHTML = "<i class='fas fa-lock-open'></i>";
    })



  }
}

//Fines experimentales
function crearDiv(userInputText) {
  const container = document.querySelector(".container"); //agarro el div "container"
  const inputItem = document.createElement("input");
  inputItem.setAttribute("type", "text");
  inputItem.setAttribute("disabled", "true");
  inputItem.classList.add("itemInput");
  inputItem.setAttribute("value", userInputText);

  const divItem = document.createElement("div")
  divItem.classList.add("item");

  const botonEditar = document.createElement("button")
  botonEditar.innerHTML = '<i class="fa-solid fa-lock"></i>'
  botonEditar.classList.add("botonEditar");

  const botonRemover = document.createElement("button")
  botonRemover.innerHTML = '<i class="fa-solid fa-trash-can">'
  botonRemover.classList.add("botonRemover");

  divItem.appendChild(inputItem);
  divItem.appendChild(botonEditar);
  divItem.appendChild(botonRemover);
  container.appendChild(divItem)
  botonEditar.addEventListener("click", () => {
    // inputItem.setAttribute("disabled", "false");
    inputItem.disabled = !inputItem.disabled
    botonEditar.innerHTML = "<i class='fas fa-lock-open'></i>";
  })

}

// function agregarDiv(){

// }

// <button class="botonEditar"><i class="fa-solid fa-lock"></i></button>
// <button class="botonRemover"></i></button>

//     const container = document.querySelector(".container"); //agarro el div "container"
// //para.innerHTML = "This is a paragraph.";
// // Create element:
// const item = document.createElement("div"); //creo otro div "item"

// container.appendChild(item); //le meto el div "item" como child adentro del "container" ahora repetir con los otros elementos:
// const itemInput = document.createElement("input")

// item.appendChild(itemInput);

//Legacy code
//<div class="item">
// <input
//   type="text"
//   class="itemInput"
//   disabled
//   value="Regar las plantas, TEXTO DE PRUEBA"
// />
//      </div>