
// function declaration
//funciones pequeñas

function saludo(nombre) {
   console.log("hola "+nombre)
}
var boton = document.querySelector('.btn')

saludo("guido")

//return es un operacion que devuelve el vaor operado
function sumar(a,b){
    return a+b
}
let suma
suma = sumar(20,30)
suma = sumar(40,355)
suma = sumar(54545,3550)
suma = sumar('s',111)

console.log(`La suma es ${suma}`)

//definir variable como argunmento

function genero(genero='humano') {
    return `Eres ${genero}`
}
console.log(genero())
// devuelve undefine si no se declara argumento.
// podemos definir un valor por default en caso de que no le pasemos un argumento