// Required Externo
// const fs = require('express');

// Required de archivos locales mediante destructuracion del objeto exports del global module
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { argv }  = require('./config/yargs');
const colors = require('colors');

// Base Manual:
// let base = 9;

// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log('Base ', argv.base);
// console.log('Limite ',argv.limite);


let comando = argv._[0]; // listar -l=11 -b=3 | crear -b=7 

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base,argv.limite)
            .then( archivo => console.log(`Archivo creado: ${ archivo }`.bgYellow.black))
            .catch( err => console.log( err.toString().bgRed.yellow ));
        break;

    default:
        console.log('Comando no reconocido.');
        break;
}

