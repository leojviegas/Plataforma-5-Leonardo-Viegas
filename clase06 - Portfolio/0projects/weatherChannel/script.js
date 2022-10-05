const botonEnviar = document.querySelector("#botonEnviar")
const inputUser = document.querySelector("#inputUser")
const ciudad = document.querySelector("#ciudad")
const wicon = document.querySelector("#wicon")
const descripcion = document.querySelector("#descripcion")
let yearSpan = document.getElementById("yearSpan")
let codigoPais = 0
let nombrePais = 0


function cargarCiudad() {
    $.getJSON(`https://api.openweathermap.org/data/2.5/weather?q=${inputUser.value}&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es`, function (data) {
        document.querySelector(".container").style.visibility = "visible"
        inputUser.value = ""
       

        document.querySelector("#ciudad").textContent = data.name
        document.querySelector("#temperatura").innerHTML = data.main.temp + "<sup>°C</sup>"
        document.querySelector("#wicon").setAttribute("src", "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png")
        document.querySelector("#descripcion").textContent = data.weather[0].description

        codigoPais = data.sys.country
         mostrarPais(codigoPais)
    })
        .fail(function () {
            if (inputUser.value == "") {
                alert("No ingresaste ninguna ciudad. Por favor ingresá una ciudad")
            }
            else {
                alert("El texto que ingresaste corresponde a una ciudad inexistente")
            }
        });

   
    function mostrarPais(codigoPais) {
        $.getJSON(`https://restcountries.com/v3.1/alpha/${codigoPais}`, function (data) {
            
            nombrePais = data[0].translations.spa.common
            document.querySelector("#pais").textContent = nombrePais
        })
    }
}

function updateYear() {
    const currentYear = new Date().getFullYear();
    yearSpan.innerHTML = currentYear
}




botonEnviar.addEventListener("click", cargarCiudad)
inputUser.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        botonEnviar.click();
    }
});

updateYear()

//para ir al nombre en español en la 2da API del pais correspondiente:
//data[0].translations.spa.common


