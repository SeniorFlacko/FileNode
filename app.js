// Required Externo
// const fs = require('express');

// Required de archivos locales
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('yargs')
                .command('listar','Imprime en consola la tabla de multiplicar',{
                    base: {
                        demand: true,
                        alias: 'b'
                    },
                    limite:{
                        alias: 'l',
                        default: 10
                    }
                })
                .command('crear','Crea un archivo con la tabla de multiplicar de dicha base',{
                    base: {
                        demand: true,
                        alias: 'b'
                    },
                    limite: {
                        alias: 'l',
                        default: 10
                    },
                })
                .help()
                .argv;
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
            // .then( archivo => console.log(`Archivo creado: ${ archivo }`))
            // .catch( err => console.log( err ));
        break;
    case 'crear':
        crearArchivo(argv.base,argv.limite)
            .then( archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch( err => console.log( err ));
        break;

    default:
        console.log('Comando no reconocido.');
        break;
}

