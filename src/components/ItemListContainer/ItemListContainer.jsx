import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemListContainer = props => {
    return (
        <h2 className='welcome'>Hola <b id='welcome--name'>{ props.greeting }</b>, bienvenido/a a nuestra tienda online!</h2>
    )
}

export default ItemListContainer;