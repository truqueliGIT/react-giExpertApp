// import { useState, useEffect } from 'react';
import { GifGridItem } from './GifGridItem';

import { useFetchGifs } from "../hooks/useFetchGifs"

export const GiffGrid = ({ category }) => {

    // const [images, setImages] = useState([]);

    // useEffect(() => {
    //     getGifs(category)
    //         // .then(imgs => setImages(imgs))
    //         .then(setImages) //Se deja así ya que setImages recibe el primer argumento que en este caso es el return gifs del helper getGifs
    // }, [category]); //Debido a que la peticion fetch se realiza cada vez que se renderiza el dom se usa useEffect junto a un array que indica que lo que se llama dentro se ejecuta hasta que cambie lo que hay dentro del array 

    const { data:images , loading } = useFetchGifs(category);

    return (
        <>
            <h2 className='animate__animated animate__fadeInRight animate__slower'>{category}</h2>
            { loading && <p>Cargando.....</p>}
            <div className="card-grid">
                {

                    images.map((img) => (
                        <GifGridItem /* Se encarga de renderizar */
                            key={img.id}
                            // img={img}
                            {...img}
                        /> //Al igual que parfa addItem se le entrega la prop img  que conmtiene los valores de setImages junto al  key
                    ))
                }

                {/*                 {
                    // images.map((img) => (
                    //     <li key={img.id}>{img.title}</li>
                    // ))
                    images.map((img) => (
                <GifGridItem 
                    key={img.id}
                    // img={img}
                    {...img}
                    /> 
                ))
                } */}


            </div>
        </>
    )
}
