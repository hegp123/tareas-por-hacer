const descripcion = {
    alias: 'd',
    demandOption: true,
    desc: 'Descripcion de la tarea por hacer'

}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente una tarea'
}

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    })
    .command('borrar', 'borra un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .help()
    .argv;


module.exports = {
    argv
}