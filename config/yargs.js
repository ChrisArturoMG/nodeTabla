const { option, alias, number } = require('yargs');
const argv = require('yargs')
    .option('b', {
        alias:'base',
        type: 'number', 
        demandOption : true,
        describe : 'Es la base de la tabla de multiplicar'
    })
    .check((argv, options)=>{
        //console.log('Yargs', argv)
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un numero';
        }
        return true

    })
    .option('l',{
        alias: 'listar',
        type : 'boolean',
        default : false,
        describe: 'Muestra los cambios en consola'
    })
    .option('limite',{
        type: 'number',
        describe: 'Indica el limite hasta donde calcular la tabla'
    }
    

    )
.argv;

module.exports = argv;