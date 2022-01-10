import { useEffect, useState } from 'react';
import { getGifs} from '../helpers/getGifs';

export const useFetchGifs = (category) => { //Un custom hook se recononoce por tener un "use" en su nombre y ademas no retorna jsx===html

    const [state, setState] = useState({
        data: [],
        loading: true
    });
    useEffect(() => {

        getGifs(category) //Se llama el helper que contiene la petición
        
            // .then(imgs => setImages(imgs))
            .then(imgs => { // al ser asincrona retorna una promesa que hay que resolvcer con un then
                    setState({ //se actualza el estado 
                        data: imgs,
                        loading: false
                    });
                
            }) 
    }, [category]); //Debido a que la peticion fetch se realiza cada vez que se renderiza el dom, se usa useEffect junto a un array que indica que lo que se llama dentro se ejecuta hasta que cambie lo que hay dentro del array 

    return state; //state = {data: [], loading:true}
}