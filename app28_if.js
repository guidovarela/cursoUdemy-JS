//if/ else

let eft = parseInt(prompt("Ingrese el monto en Efectivo"))
let credito = parseInt(prompt("Ingrese el monto del credito"))
let disponible = eft+credito
let totalCarrito = 800

/*
if(totalCarrito < eft) {
    console.log('Puedes pagar')
}else if(totalCarrito < credito){
    console.log('Puedes pagar')
}else{
    console.log('no puedes pagar')
}*/

if(totalCarrito <= eft || totalCarrito <= credito || disponible >= totalCarrito) {
    console.log('Puedes pagar')
    console.log(`te quedan $${disponible-totalCarrito} para gastar`)
}else{
    console.log('no puedes pagar')
}


//ternario

const login = false

console.log(login === true ? 'usuario logueado' : 'usuario deslogueado')