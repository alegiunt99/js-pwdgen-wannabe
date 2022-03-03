// Nome

const nameUser = prompt()



// Cognome

const surnameUser = prompt()




// Colore preferito

const favouriteColorUser = prompt()



// Password

const passwordUser = nameUser + surnameUser + favouriteColorUser + "21"

console.log(passwordUser)



document.getElementById("demo").innerHTML = "La tua password è: <span><strong>" + passwordUser + "</strong></span>";