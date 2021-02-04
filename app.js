const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')

// console.log(process.argv)
// console.log(argv)
// console.log('base:', argv.base)
//COMANDO QUE VIENEN DESDE LA CONSOLA
// [
//     '/usr/local/bin/node', // PATH DONDE ESTA LA APLICACION DE NODE DE MANERA GLOBAL
//     '/home/a/Desktop/node/03-bases-node/app', // DONDE ESTA LA APLICACION DE LA APP
//     '--base=3'
//   ]
// const [,,arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=')
 
console.clear();
//console.log( argv )
 
 crearArchivo(argv.b, argv.l, argv.limite)
 .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
 .catch(error => console.log(error))
