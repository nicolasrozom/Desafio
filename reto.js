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