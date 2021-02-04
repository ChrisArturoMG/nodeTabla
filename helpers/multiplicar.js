const fs = require('fs')
const colors = require('colors')

const crearArchivo = async(base = 5, listar, limite) => {
    try {
        let salida = ''
    
        for (let i = 1; i <=limite; i++) {
            salida += ` ${ base } x ${ i } = ${ base*i }\n`   
        }
        
        if (listar){
            console.log('============'.green)
            console.log(`tabla de ${ base }`.america)
            console.log('============'.green)
    
            console.log(salida.rainbow)
        } 
        
        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida)
        
        return `tabla-${ base }.txt creada`    
    } catch (error) {
        throw error
    }

    // fs.writeFileSync(`tabla-${base}.txt`, salida, (err)=>{
    //     if(err) throw err
    //     console.log(`tabla-${base}.txt creado`)
    // })
}

module.exports = { 
     crearArchivo
}