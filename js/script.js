// Nome

const nameUser = prompt()



// Cognome

const surnameUser = prompt()




// Colore preferito

const favouriteColorUser = prompt()



// Password

console.log(
    nameUser + surnameUser + favouriteColorUser + "21"
)


document.getElementById("demo").innerHTML = "La tua password è: <span><strong>" + nameUser + surnameUser + favouriteColorUser + "21" + "</strong></span>";