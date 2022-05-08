// import PropTypes from "prop-types";
// Usar el Snippet rafc
// Componentes funciona

import { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = ( ) => {

    // const categorias = ['One punch', 'Dragon Ball Z', 'Dragon Ball']; esto no se hace al menos que no vaya a cambiar
    
    const [categorias, setCategories] = useState(['One punch']);

    // Agregamos un boton para enviar peticiones de renderizado nuevo con un botton y agregar un nuevo elemento
    /* 
    const handleAdd = () =>{
        setcategories( categorias.concat('Gonzalo estuvo aqui breoooo'));
        Otra opcion es usar spreed operator ...categories, 'nuevo elemento';
    } */

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory  setCategories={ setCategories } />
            <hr />

            {/* <button onClick={ handleAdd }>Agregar</button> */}

            <ol>
                { 
                    categorias.map( category => 
                        <GifGrid 
                            key={category}
                            category={category}/>)
                }
            </ol>

        </>
    );
}

export default GifExpertApp;