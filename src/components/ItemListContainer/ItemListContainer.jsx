import { useState, useEffect } from 'react';
import ItemList from './ItemList.jsx';
// import PropTypes from 'prop-types puede ser usada para verificar el tipo de propiedad a pasar a un component e indicar si es requerida 
// e.g. ItemListContainer.PropTypes = { greeting: PropTypes.number.isRequired } 
import NikeXStussyAirZoom from '../../assets/Stussy-Nike-Zoom-Spiridon.jpg';
import NikeXStussyIntTee from '../../assets/Nike-x-Stussy-T-Shirt-Black.jpg';
import NikeXStussyIntCN from '../../assets/Nike-x-Stussy-International-Crewneck-Sweatshirt-Black.jpg';

const products = [
    {
        id: 0,
        name: "Nike Air Zoom Spiridon",
        category: "Zapatillas",
        price: 101000,
        description: "Cage 2 Stussy Fossil",
        img: NikeXStussyAirZoom,
        stock: 1
    },
    {
        id: 1,
        name: "Nike x Stussy T-Shirt",
        category: "Remeras",
        price: 14000,
        description: "Black",
        img: NikeXStussyIntTee,
        stock: 5
    },
    {
        id: 2,
        name: "Nike x Stussy Crewneck",
        category: "Hoodies/Zippers",
        price: 34000,
        description: "Black",
        img: NikeXStussyIntCN,
        stock: 3
    }
];


const getProducts = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve(products)
    }, 2000);
}) 

const ItemListContainer = ({greeting}) => {
    
    const [products, setProducts] = useState([]);
    const [preloader, setPreloader] = useState(true);

    useEffect(() => {
        getProducts
        .then((res) => setProducts(res))
        .finally(() => setPreloader(false));
    }, [])

    return (
        <>
            <h2 className='welcome'>Hola <b id='welcome--name'>{ greeting }</b>, bienvenido/a a nuestra tienda online!</h2>
            <ItemList items={products} preload={preloader}/>
        </>
    )
}

ItemListContainer.defaultProps = { greeting: 'user' };

export default ItemListContainer;