var nombre = 'Guido'

let apellido = 'Varela'

const EDAD = 39

console.log(`Mi nombre es ${nombre} ${apellido} y tengo ${EDAD} años`)

let lang = 'Javascript'
let mensaje = "El lenguaje es"
let lorem = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam doloremque error officia porro sequi non magnam voluptatem veniam necessitatibus sint. Natus eaque optio voluptas sunt reiciendis dolor! Natus, placeat reprehenderit?'
console.log(mensaje.concat(lang))


//----------------------------------- 
//Metodos para operar strings
//----------------------------------- 


//idem a substring()
console.log(mensaje.slice(0,10))

//split -> devuelve un array con cada palabra, usando como separador la cadena pasada como parametro
//console.log(mensaje.split(' '))

//contar las palabras de una cadena
function contarPalabras(ar){
    let cuenta = ar.split(' ')
    return `El array tiene ${cuenta.length} palabras`
}
console.log(contarPalabras(mensaje))

//replace() reemplaza un caracter por otro
console.log(lorem.replace(' ','-'))

//repeat() repite un objeto, la cantidad de veces, segun el argumento
console.log(nombre.repeat(5))