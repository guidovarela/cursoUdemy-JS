//funciones IIFE
// funciones que se declaran y se invocan automaricamente

(function(a,b){
    console.log(a+b)
})
(20,30)

//metodos de propiedad
//Cuando una funcion se inserta dentro de un objeto, y se convierten en metodos
// los metodos tambien pueden guardarse / crearse fuera del objeto

const musica = {
    reproducir:function(id){
        console.log(`Reproduciendo cancion ${id}`)
    },
    pausar:function(){
        console.log(`pausando...`)
    }
}
musica.borrar = function(id){
    console.log(`se ha borrardo la cancion ${id}`)
}
musica.reproducir(20)
musica.borrar(20)
