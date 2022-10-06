let yearSpan = document.getElementById("yearSpan")

function updateYear() {

    const currentYear = new Date().getFullYear();
    yearSpan.innerHTML = currentYear;
}

updateYear()