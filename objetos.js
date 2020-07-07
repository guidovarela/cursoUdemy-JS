// Arrays

const numeros = new Array(12,20,30,40,50,60)
console.log(numeros)

const meses = ['Enero','Febrero','Marzo','Abril','Mayo']

console.log(Array.isArray(meses))//true

//agregar un dato, al final del array
meses.push('Junio')
console.log(meses)

//indexOf busca un valor en el array y devuelve el indice.
console.log(meses.indexOf('Febrero'))

const personas = [{
    nombre:"Guido",
    apellido:"Varela",
    edad:39,
    equipo:'River Plate'
},{
    nombre:"Marcela",
    apellido:"Lopez",
    edad:19,
    equipo:'River Plate'
},{
    nombre:"Jose",
    apellido:"Mirlo",
    edad:40,
    equipo:'Chacarita'
},{
    nombre:"Paula",
    apellido:"Pablo",
    edad:20,
    equipo:'Atlanta'
}
]
console.log(personas)
for (let i = 0; i < personas.length; i++) {
    if(personas[i].equipo == 'River Plate'){
        console.log()
        console.log(`${personas[i].nombre} ${personas[i].apellido} es hincha de ${personas[i].equipo}`)
    }
    
}