require('dotenv').config()
const {mostrarMenu, leerInput, pausa, listarLugares} = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');
console.log('geoloc');


const main = async()=>{
    let opt=null;
    const busquedas=new Busquedas();

    do{
        opt = await mostrarMenu();

        switch(opt){
            case 1:
                //Mostrar mensaje
                const ciudad = await leerInput("Introduzca ciudad:");
                //Buscar lugares
                const ciudades=await busquedas.buscarCiudad(ciudad);
                const ciudadSeleccionada=await listarLugares(ciudades);

                const seleccion=ciudades.find(item=>item.id===ciudadSeleccionada);
                //Clima



                //Mostrar resulados
                console.log(seleccion);

                console.log(`Información de ${seleccion.nombre}`.green);

                console.log(`lat ${seleccion.lat}`.green);
                console.log(`lon ${seleccion.lng}`.green);
                console.log(`Temeratura ${ciudad}`.green);
                console.log(`Máxima ${ciudad}`.green);
                console.log(`Mínima ${ciudad}`.green);

                await pausa();


            break;

            case 2:

            break;

            default:
                break;

        }
    }while(opt!==0 )
    
}

main();