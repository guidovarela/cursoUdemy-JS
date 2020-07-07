// Arrays

const numeros = new Array(12,20,30,40,50,60)
console.log(numeros)

const meses = ['Febrero','Marzo','Abril','Mayo']

console.log(Array.isArray(meses))//true

//agregar un dato, al final del array
meses.push('Junio')
console.log(meses)

//indexOf busca un valor en el array y devuelve el indice.
console.log(meses.indexOf('Febrero'))

//agregar al inicio del array
meses.unshift('Enero')
console.log(meses)

//eliminar el ultimo
meses.pop()

//quitar el primer indice
meses.shift()

//quitar algun indice intermedio -> splice(indice,cantidadIndicesABorrar)
meses.splice(2,1)

//revertir el orden
meses.reverse()


console.log(meses)