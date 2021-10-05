const { describe } = require('yargs');

const argv = require('yargs')
                .option( 'b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla a multiplicar'
                })
                .option( 'l', {
                    alias: 'listar',
                    demandOption: false,
                    default: false,
                    type: 'boolean',
                    describe: 'Mostrar el resultado de la tabla en consola'

                })
                .option( 'h', {
                    alias: 'hasta',
                    demandOption: false,
                    default: 10,
                    type: 'number',
                    describe: 'Valor maximo de la tabla'

                })
                .check( (argv, options) => {
                    if( isNaN( argv.b) ){
                        throw 'La base tiene que ser numero';
                    }
                    if( isNaN  ( argv.h)){
                        throw 'Valor maximo de la tabla tiene que ser numero';
                    }
                    return true;
                })

                .argv;


module.exports = argv;