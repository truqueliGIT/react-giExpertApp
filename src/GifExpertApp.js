//Este es el primer componenete

import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GiffGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    // const categories = ['One punch', 'Samurai x', 'Dragon Ball']; nuca se define un arreglo así a menos que nunca vaya a cambiar
    const [categories, setCategories] = useState(['One punch']); // se define un useState

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory /* atributo/prop*/ setCategories= /* valor*/{setCategories} />{/* se llama el componenete AddCategory y se de la prop setCategories para actulizar categories*/}
            <hr />

            <ol> 
                {
                    categories.map((category) => (//se mapea categories para mostrarlo en una lista ordenada
                        // <li key={category}>{category}</li> //Warning: Each child in a list should have a unique "key" prop. Quiere decir que el elemento necesita un key
                        <GiffGrid /* se llama el componente GifGrid que renderiza las categorias junto a las props key y category*/
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>

    );
}


