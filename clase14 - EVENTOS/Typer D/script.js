const words = [
    'californication',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili',
    "otorrinolaringologia",
    "hola",
    "chau"
];
let container = document.querySelector(".container")
let main = document.querySelector(".main")
let h1 = document.querySelector("#randomWord")
let input = document.querySelector("#text")
let timeContainer = document.querySelector(".time-container")
let timeSpan = document.querySelector("#timeSpan")
let scoreContainer = document.querySelector(".score-container")
let scoreSpan = document.querySelector("#scoreSpan")
let endGameContainer = document.querySelector(".end-game-container")
let palabraAleatoria = "placeholder"
let palabraIngresada = ""
let time = 10
let score = 0
let timeInterval = setInterval(actualizarTiempo, 1000);

timeSpan.innerHTML = time
scoreSpan.innerHTML = score


function randomWords() {
    let randomNumber = Math.floor(Math.random() * words.length)
    while (palabraAleatoria == words[randomNumber]) {
        randomNumber = Math.floor(Math.random() * words.length)
    }
    palabraAleatoria = words[randomNumber];
}
function addToDOM() {
    randomWords()
    h1.innerHTML = palabraAleatoria
}

input.addEventListener("input", function (e) {
    palabraIngresada = input.value

    if (palabraIngresada === palabraAleatoria) {

        time += 3
        timeSpan.innerHTML = time
        palabraIngresada = ""
        addToDOM()
        input.value = ""
        updateScore()
        

    }
})

function actualizarTiempo() {
    time -= 1
    timeSpan.innerHTML = time
    if (time === 0) {
        clearInterval(timeInterval);
        gameOver()
    }
}

function updateScore() {
score+=1
scoreSpan.innerHTML = score
}

function gameOver() {
    let h1 = document.createElement("h1")
    let p = document.createElement("p")
    let boton = document.createElement("button")

    container.removeChild(main)
    h1.innerHTML = "Se acabó el tiempo!"
    p.innerHTML = `Puntaje final: ${score}`
    boton.innerHTML = '<button onclick="location.reload()">Volvé a empezar</button>'
    endGameContainer.appendChild(h1)
    endGameContainer.appendChild(p)
    endGameContainer.appendChild(boton)
}

addToDOM()
