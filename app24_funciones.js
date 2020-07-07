//funciones

//typeof() devuelve tipo de dato

const suma = function(a=0,b=0){
    return a+b
}

console.log(typeof(suma()))
console.log(suma(20,77))

const persona = function(nombre='visitante',edad=0,trabajo='falta completar'){
return `hola ${nombre}, tienes ${edad} y eres ${trabajo}`
}
console.log(persona('Guido',39,'diseñador'))
console.log(persona())