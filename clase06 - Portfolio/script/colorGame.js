let yearSpan = document.getElementById("yearSpan")
let arraySquares = document.querySelectorAll(".square")
let h1 = document.querySelector(".h1")
let colorDisplay = document.getElementById("colorDisplay")
let message = document.getElementById("message")
let botonReset = document.getElementById("reset")
// let botonEasy = document.getElementById("easyButton")
// let botonHard = document.getElementById("hardButton")
let modeButtons = document.querySelectorAll(".modeButton")
let numberOfSquares = 6
let arrayColors = []
let pickedColor = ""

botonReset.addEventListener("click", reset)


modeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        this.classList.add("selected")
        for (let i = 0; i < modeButtons.length; i++) {
            if (modeButtons[i] != this) {
                modeButtons[i].classList.remove("selected")
            }
        }
        if (button.textContent == "Hard") {
            numberOfSquares = 6
            for (let i = 0; i < arraySquares.length; i++) {
                arraySquares[i].style.display = "block"
            }
        } else {
            numberOfSquares = 3
            for (let i = 3; i >= 3 && i <= 5; i++) {
                arraySquares[i].style.display = "none"
            }
        }
        reset()
    })
})






function reset() {
    arrayColors = generateRandomColors(numberOfSquares)
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
        botonReset.innerHTML = "Jugar de nuevo"


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

function updateYear() {
    const currentYear = new Date().getFullYear();
    yearSpan.innerHTML = currentYear
}
updateYear()

reset()


//CODIGO BOTONES antes de refactorizar:

// botonEasy.addEventListener("click", function () {
//     this.classList.add("selected")
//     botonHard.classList.remove("selected")
//     numberOfSquares = 3
//     for (let i = 3; i >= 3 && i <= 5; i++) {
//         arraySquares[i].style.display = "none"
//     }
//     reset()
// })

// botonHard.addEventListener("click", function () {
//     this.classList.add("selected")
//     botonEasy.classList.remove("selected")
//     numberOfSquares = 6
//     for (let i = 0; i < arraySquares.length; i++) {
//         arraySquares[i].style.display = "block"
//     }
//     reset()
// })