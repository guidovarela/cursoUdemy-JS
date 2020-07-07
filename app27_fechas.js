//fechas
//tenemos un objeto Date()


const fecha = new Date()
console.log(`Hoy es ${fecha}`)

let diaHoy = fecha.getDay()
if(diaHoy == 1){
    diaHoy = "Lunes"
}if(diaHoy == 2){
    diaHoy = "Martes"
}if(diaHoy == 3){
    diaHoy = "miercoles"
}
console.log(diaHoy)
//mes / dia / año


var dia = fecha.getDate()
let mes = fecha.getMonth()
let anio = fecha.getFullYear()

if(dia<10){dia = '0'+dia}
if(mes<10){
    mes++
    mes = `0${mes}`
}

let fechaHoy = `${dia}/${mes}/${anio}`
let insertReloj = document.querySelector('.hora').innerHTML=fechaHoy

let horaActual = `${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`



//reloj JS
/*
function horaActual(){
    
    let reloj = document.querySelector('.hora')
    let relojJS = setInterval(horaActual, 500)
    reloj.innerHTML=relojJS
}
horaActual()

*/

