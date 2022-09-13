function cuantoParaSabado() {

    let h2 = document.querySelector("h2")

    let date = new Date()
                  
    

    let diasParaSabado = 6 - date.getDay()

    if (diasParaSabado != 0) {
        h2.innerHTML = "FALTAN " + diasParaSabado + " DÍAS PARA EL SÁBADO"
    }
    else {
        h2.innerHTML = "HOY ES SÁBADO"
    }

}
cuantoParaSabado()