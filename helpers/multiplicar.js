const fs = require('fs');
const { resolve } = require('path');
const colors = require('colors');


const crearArchivoProm = ( base = 5) => {
    return new Promise((resolve, reject) => {
        console.log('===================');
        console.log('   Tabla del:', base);
        console.log('===================');

        let salida = '';

        for (let i=1; i<=10; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        console.log(salida);

        const nameFile = `tabla-${base}.txt`;
        fs.writeFileSync(nameFile, salida);
        resolve(nameFile);
    });
}

const crearArchivo = async ( base = 5, listar = false, hasta = 10) => {
    try {    
        let salida = '', consola = '';

        for (let i=1; i<=hasta; i++) {
            salida += `${base} X ${i} = ${base * i}\n`;
            consola += `${base} ${'X'.green} ${i} ${'='.green} ${base * i}\n`;
        }
        if (listar) {
            console.log('==================='.green);
            console.log('   Tabla del:'.green, colors.blue(base));
            console.log('==================='.green);
            console.log(consola);
        }

        //fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
        //    if (err) throw err;
        //    console.log(`tabla-${base}.txt creado`);
        //});
        const nameFile = `tabla-${base}.txt`;
        fs.writeFileSync('./salida/'+nameFile, salida);
        //console.log(`tabla-${base}.txt creado`);
        return nameFile;
    } catch (error) {
        return error;
    }
}

//exportar un objeto
module.exports = {
    crearArchivo
}