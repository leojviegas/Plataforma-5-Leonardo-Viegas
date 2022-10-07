let arraySquares = document.querySelectorAll(".square")
let h1 = document.querySelector(".h1")
let colorDisplay = document.getElementById("colorDisplay")
let message = document.getElementById("message")
let botonReset = document.getElementById("reset")
let botonEasy = document.getElementById("easyButton")
let botonHard = document.getElementById("hardButton")
let amountOfSquares = 6
let arrayColors = []
let pickedColor = ""

botonReset.addEventListener("click", reset)

botonEasy.addEventListener("click", function() {
    this.classList.add("selected")
    botonHard.classList.remove("selected")
})
botonHard.addEventListener("click", function() {
    this.classList.add("selected")
    botonEasy.classList.remove("selected")
})

function reset() {
    arrayColors = generateRandomColors(amountOfSquares)
    pickedColor = pickColor()
    colorDisplay.innerHTML = pickedColor
    for (let i = 0; i < arraySquares.length; i++) {
        arraySquares[i].style.backgroundColor = arrayColors[i]
        arraySquares[i].addEventListener("click", compareColors)
    }
    message.innerHTML = ""
    botonReset.innerHTML = "Nuevos colores"
    h1.style.backgroundColor = "rgb(50, 50, 50)"
}


function compareColors() {
    let clickedColor = this.style.backgroundColor

    if (clickedColor === pickedColor) {
        message.innerHTML = "Correcto!"
        h1.style.backgroundColor = clickedColor
        changeColorsToWinner(clickedColor)
        botonReset.innerHTML = "Play again?"
        

    } else {
        this.style.backgroundColor = document.body.style.backgroundColor
        message.innerHTML = "Inténtelo nuevamente"
    }
}

function changeColorsToWinner(clckClr) {
    arraySquares.forEach(function (square) {
        square.style.backgroundColor = clckClr
    })
}

function pickColor() {
    let x = Math.floor((Math.random()) * arrayColors.length)
    return arrayColors[x]
}

function randomColor() {

    let r = Math.floor((Math.random()) * 256)
    let g = Math.floor((Math.random()) * 256)
    let b = Math.floor((Math.random()) * 256)
    return `rgb(${r}, ${g}, ${b})`
}

function generateRandomColors(x) {
    array = []
    for (let i = 0; i < x; i++) {
        array.push(randomColor())
    }
    return array
}

reset()