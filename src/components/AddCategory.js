import { useState } from "react"
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => { //se desestructura las props que vienen desde GifExpertApp
    const [inputValue, setInputValue] = useState(''); //se define como strting vacvio ya que necesita un valor o lo define como undefined
    const handleInputChange = (e) => { //Se define una funcion que atrape los eventos/cambios en el input del DOM y cambie el valor de inputValue
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Submit hecho');
        //setcategories
        if(inputValue.trim().length > 2){
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');

        }
    }
    return (

        <form onSubmit={handleSubmit} >

            <h2>AddCategory</h2>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange} //Se utiliza el evento onChange para capturar los cambios y s
            />

        </form>

    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

