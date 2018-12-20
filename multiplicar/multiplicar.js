//requireds (Propio de Node)
const fs = require('fs');

//require externo
const colors = require('colors');


// module.exports.crearArchivo = ( base ) => {
//     return new Promise((resolve,reject) => {
//         let data = '';

//         for (let index = 0; index < 11; index++) {
//             data += `${ base } * ${ index } = ${ base*index } \n`;
//         }

//         fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//             if (err) 
//                 reject(err);
//             else
//                 resolve(`tabla-${base}.txt`)

//             console.log(`El archivo tablas/tabla-${base}.txt ha sido creado...`);
//         });

//     });
// }

let listarTabla = ( base, limite=10 ) => {
    let data = '';
    for (let index = 0; index <= limite ; index++) {
        data += `${ base } * ${ index } = ${ base*index }`.black + '\n';
    }
    console.log(data.bgYellow);
}

let crearArchivo = ( base, limite=10 ) => {
    return new Promise((resolve,reject) => {

        if ( !Number(base) ){
            reject(`El valor introducido ${ base } no es un numero.`);
            return;
        }


        let data = '';

        for (let index = 0; index <= limite; index++) {
            data += `${ base } * ${ index } = ${ base*index } \n`;
        }

        fs.writeFile(`tablas/tabla-${base}-hasta-el-${limite}.txt`, data, (err) => {
            if (err) 
                reject(err);
            else
                resolve(`tabla-${base}-hasta-el-${limite}.txt`)

            // console.log(`El archivo tablas/tabla-${base}.txt ha sido creado...`);
        });

    });
}


//ECMAS6
module.exports = {
    crearArchivo,
    listarTabla
}

// console.log(module);

// expected ===>
// Module {
//     ... ,
//     exports: { crearArchivo: [Function: crearArchivo] },
// }
