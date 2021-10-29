import React from 'react';
import ItemCount from './ItemCount.jsx';
// import PropTypes from 'prop-types puede ser usada para verificar el tipo de propiedad a pasar a un component e indicar si es requerida e.g. ItemListContainer.PropTypes = { greeting: PropTypes.number.isRequired } 
import NikeXStussyAirZoom from '../../assets/Stussy-Nike-Zoom-Spiridon.jpg';
import NikeXStussyIntTee from '../../assets/Nike-x-Stussy-T-Shirt-Black.jpg';
import NikeXStussyIntCN from '../../assets/Nike-x-Stussy-International-Crewneck-Sweatshirt-Black.jpg';

const ItemListContainer = ({greeting}) => {
    return (
        <>
            <h2 className='welcome'>Hola <b id='welcome--name'>{ greeting }</b>, bienvenido/a a nuestra tienda online!</h2>
            <div className='item__list--container'>            
                <ItemCount className='item--container' initial={0} stock={1} img={NikeXStussyAirZoom} title='Nike Air Zoom Spiridon' text='Cage 2 Stussy Fossil'/>
                <ItemCount className='item--container' initial ={0} stock={5} img={NikeXStussyIntTee} title='Nike x Stussy T-Shirt' text='Black'/>
                <ItemCount className='item--container' initial={0} stock={3} img={NikeXStussyIntCN} title='Nike x Stussy Crewneck' text='Black'/>
            </div>
        </>
    )
}

ItemListContainer.defaultProps = { greeting: 'user' };

export default ItemListContainer;