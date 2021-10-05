const fw = require('fs');
const colors = require('colors');


const crearArchivo = async( base, listar, hasta ) =>{

    
    let salida, consola = '';



    for( let i = 1; i <= hasta; i++)
    {
        salida +=  `${ base } * ${ i } =  ${base * i } \n`;
        consola += `${ base } ${ '*'.green } ${ i } =  ${base * i } \n`;
    };


    if( listar ){

        console.log('================='.green);
        console.log(`   Tabla del: ${ base }`);
        console.log('================='.green);
    
        console.log(consola);

    }

    try{

        const nombreArchivoSalida = `./salida/tabla-${ base }.txt`;
        fw.writeFileSync( nombreArchivoSalida, salida);
        return nombreArchivoSalida;

    }catch ( err ){

        throw err;
    }
};


/**sin path lo deje en la raiz donde se ejecuto el prog 
 * otra forma de escribir un archivo.
 * 
fw.writeFile( `tabla-${ base }.txt`, salida, ( err )=>{
    if (err) throw err;
    console.log('The file has been saved!');

} ); 

*/

module.exports = {
    crearArchivo
}