let boton = document.querySelector(".boton")

boton.addEventListener("click", seEjecutaEnEvento)

function seEjecutaEnEvento() {
    let beep = document.createElement("p")
    beep.insertAdjacentHTML("afterbegin", "BEEP")
    let body = document.body
    body.appendChild(beep)

    let r = Math.floor((Math.random()) * 256)
    let g = Math.floor((Math.random()) * 256)
    let b = Math.floor((Math.random()) * 256)
    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    console.log(r, g, b)

}

