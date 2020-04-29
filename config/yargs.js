const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Decripción de la tarea'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completada o pendiente una tarea'
}

const argv = require('yargs')
    .command('crear', 'Crea una tarea', {
        descripcion
    })
    .command('actualizar', 'Actualiza una tarea', {
        descripcion
    })
    .command('borrar', 'Elimina una tarea', {
        descripcion
    })
    .argv;

module.exports = {
    argv
}