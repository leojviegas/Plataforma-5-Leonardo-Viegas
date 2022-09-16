function cuantoParaSabado() {
    let h2 = document.querySelector("h2")
    let date = new Date()
    let diasParaSabado = 6 - date.getDay()

    if (diasParaSabado != 0) {
        if (diasParaSabado == 1) {
            h2.innerHTML = "FALTA " + diasParaSabado + " DÍA PARA EL SÁBADO"
        } else {
            h2.innerHTML = "FALTAN " + diasParaSabado + " DÍAS PARA EL SÁBADO"
        }
    }
    else {
        h2.innerHTML = "YA ES SÁBADO"
    }
}
cuantoParaSabado()