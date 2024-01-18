//Recuerda usar /* */ para comentar los retos que no quieres que apliquen --> SOLO UNO A LA VEZ


// RETO: Día de la semana
let preguntaDia = prompt("Dime un día de la semana:");
let diaValido1 = "sabado"
let diaValido2 = "domingo"

console.log(preguntaDia);

if (preguntaDia == diaValido1) {
    alert("Es correcto")
} else {
    if (preguntaDia == diaValido2)
    alert("Es correcto")
} 

// RETO: numero positivo o negativo

let numeroUsuario = prompt("Dame un numero y te digo si es + o -");

if (numeroUsuario >= 0) {
    alert("Es un numero positivo")
} else {
    alert("Es un numero negativo")
} 

// RETO: Mensaje segun puntuación

let puntaje = prompt("Ingresa tu cantidad de puntos")

if (puntaje >= 100) {
    alert("¡Felicidades, has ganado!")
} else {
    alert("Intenta nuevamente para ganar.")
}

//Reto: Alertar sobre el dinero en la cuenta
let saldoCuenta =  10000

alert(`Su saldo en la cuenta bancaria es de $${saldoCuenta} dolares.`)


//Reto: Mensaje de bienvenida
let nombreUsuario = prompt("Por favor danos tu nombre:")

alert(`Es un gusto tenerte en nuestra tienda ${nombreUsuario}.`)