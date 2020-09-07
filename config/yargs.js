const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'

}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Descripción de la tarea por hacer'
}




const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {descripcion})
    .command('actualizar', 'Actualiza el estado completado de una tarea', {descripcion, completado})
    .command('borrar', 'Borra una tarea', {descripcion})
    .command('listar', 'Borra una tarea', {completado})
    .help()
    .argv;

module.exports = {
    argv
}