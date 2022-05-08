import React, { useState } from 'react'
import PropTypes from "prop-types";

const AddCategory = ( { setCategories } ) => {
    
    const [ inputValue, yoRenderizoLoNuevo ] = useState('');

    // const para evento onchange.
    const onChangeInputValue = (e) =>{
        yoRenderizoLoNuevo( e.target.value);
    }

    const handlerSubmit = (e) =>{
        e.preventDefault();

        if( inputValue.trim().length > 2){
            /* Esto llama al siguiente */
            inputValue.trim().length > 2 && setCategories(cats => [inputValue, ...cats]);
        }

    }

    return (
        <form onSubmit={ handlerSubmit }>
        
            <input 
                type = "text"
                value = { inputValue }
                onChange = { onChangeInputValue }
            />
            
        </form>

    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}



export default AddCategory;