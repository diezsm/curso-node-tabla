//const { argv } = require("process");
const { crearArchivo } = require("./helpers/multiplicar");//lo hago asi porque no tengo babel instalado
const argv  = require('./config/yargs');

const colors = require('colors');


console.clear();
//const base = 3;
/** 
const [, , arg3] = process.argv;
const [, base] = arg3.split('=');
console.log( base );
*/


/** 
crearArchivo(base)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(console.log);

*/


//console.log(argv);
//console.log('base: yargs', argv.listar);

crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.bgGreen, 'creado'))
    .catch(console.log);
















