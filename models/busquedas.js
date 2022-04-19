const axios = require('axios').default;

class Busquedas{

    historial=['Madrid', 'Barcelona'];
    
    constructor(){
        //TODO. leer BD si existe
        
    }

    get paramsMapbox(){
        return {
            'language': 'es',
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5
        }
    }
    async buscarCiudad (ciudad) {
        //Petición http;
        console.log(ciudad);
        try {
            const _instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ciudad}.json`,
                params: this.paramsMapbox
            }); 
            const respuesta= await _instance.get();
            
            const resp = respuesta.data.features.map(item=>({
                id: item.id, 
                nombre: item.place_name,
                lng: item.center[0],
                lat: item.center[1],
            }
            ));
            console.log(resp);
            return resp;
            
        }catch(err){
            console.log("error al solicitar ciudad");
            console.log(err);
            return [];
        }
        
    }
}

module.exports = Busquedas;