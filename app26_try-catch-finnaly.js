//seteo de intervalos

//las funciones se ejcutan en orden. 
//si alguna falla, se detiene la ejecucion

function obtenerUsuarios(id){
    console.log('descargando...')
    setTimeout(function(){
        console.log(`Se cargaron ${id} usuarios`)
    },3000)
}
obtenerUsuarios(5)

//try/catch/finnaly
//sirve para ejecutar un proceso, y que caso de que falle, no interrumpa la ejecucion del resto de las tareas

try {
    funcionQueNoExiste()
} catch (error) {
    console.log('error')
}finally{
    console.log('se ejecuta siempre, no importa que devuelve error')
}

