import React from 'react';
import ItemList from './ItemList.jsx';
// import PropTypes from 'prop-types puede ser usada para verificar el tipo de propiedad a pasar a un component e indicar si es requerida e.g. ItemListContainer.PropTypes = { greeting: PropTypes.number.isRequired } 

const ItemListContainer = ({greeting}) => {
    return (
        <>
            <h2 className='welcome'>Hola <b id='welcome--name'>{ greeting }</b>, bienvenido/a a nuestra tienda online!</h2>
            <ItemList />
        </>
    )
}

ItemListContainer.defaultProps = { greeting: 'user' };

export default ItemListContainer;