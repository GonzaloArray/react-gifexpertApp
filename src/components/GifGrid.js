// import React, { useState, useEffect } from 'react'
import GifGridItem from './GifGridItem';
// import getGifs from '../helpers/getGifs';

import useFetchGifs from "../hooks/useFetchGifs"

export const GifGrid = ({category}) => {
    /* Necesito recibir una categoria y hacer una peticion https para traer las imagenes a esta categoria*/
    /* const [ images, setImages] = useState([]); */

    const { data:images, loading } = useFetchGifs( category );

    // Esto se renderiza una sola vez, una vez llamado la petición
   /*  useEffect(() => {
        getGifs( category )
            .then(setImages);
    }, [ category ]) */


    return (
        // Desafio: Esto tiene que devolvernos en el DOM el id con sus titulos
        //utilizar map para retornar un nuevo arreglo y mostrarlo en pantalla
        // Utilizaras expresiones de js
        //Manos a la obra

        <>
            <h2> { category } </h2>

            { loading && <p> Estamos cargando tú petición </p> }
            
            <div className='card-grid'>
                {
                    images.map( img => (
                        <GifGridItem 
                        key={ img.id }
                        { ...img }
                        />
                    ))  
                }
            </div>

        </>
    )
}
