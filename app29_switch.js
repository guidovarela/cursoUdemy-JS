//Switch case
//un condicional con muchas condiciones

const metodoPago = ["efectivo","visa","cheque","patacones","bitcoins"]

let i = 0

switch(metodoPago[i]) {
    case metodoPago[0] : 
        console.log(`el metodo elegido es ${metodoPago[0]}`)
    break;
    case metodoPago[1] : 
        console.log(`el metodo elegido es ${metodoPago[1]}`)
    break;
    case metodoPago[2] : 
        console.log(`el metodo elegido es ${metodoPago[2]}`)
    break;    
    case metodoPago[3] : 
        console.log(`el metodo elegido es ${metodoPago[3]}`)
    break;    
    case metodoPago[4] : 
        console.log(`el metodo elegido es ${metodoPago[4]}`)
    break;
    default : console.log(`No se ha seleccionado un metodo de pago válido`)
}