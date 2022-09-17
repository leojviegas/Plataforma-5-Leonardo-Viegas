const botonEnviar = document.querySelector("#botonEnviar")
const inputUser = document.querySelector("#inputUser")
const ciudad = document.querySelector("#ciudad")
const wicon = document.querySelector("#wicon")
const descripcion = document.querySelector("#descripcion")

function cargarCiudad() {
    // let ciudad = input.value;
    // inputUser.getAttribute("value")
    // console.log(ciudad);
    $.getJSON(`https://api.openweathermap.org/data/2.5/weather?q=${inputUser.value}&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es`, function (data) {
        console.log(data.name)
        console.log(data.weather[0].icon)
        ciudad.textContent = data.name;
        // wicon.textContent = data.weather[0].icon;
        // descripcion.textContent = 
    })
}

botonEnviar.addEventListener("click", cargarCiudad)

// botonEnviar.addEventListener("click", cargarCiudad)