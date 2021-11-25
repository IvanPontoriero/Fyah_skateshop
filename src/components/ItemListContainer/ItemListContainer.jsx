import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
        categoria: 'zapatillas',
        stock: 1
    },
    {
        id: 1,
        name: "Nike x Stussy T-Shirt",
        category: "Remeras",
        price: 14000,
        description: "Black",
        img: NikeXStussyIntTee,
        categoria: 'remeras',
        stock: 5
    },
    {
        id: 2,
        name: "Nike x Stussy Crewneck",
        category: "Hoodies/Zippers",
        price: 34000,
        description: "Black",
        img: NikeXStussyIntCN,
        categoria: 'hoodies-zippers',
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

    const {categoryId} = useParams();

    useEffect(() => {

        const dbQuery = getFirestore(); //conexion con firestore
        dbQuery.collection('items').get() //traemos toda la colleccion de datos con .get() y con .doc(#idDelItem) traemos un solo item
        .then(data => setProducts( data.docs.map(prod => ({ categoryId: prod.categoryId, ...prod.data()}))))
        .catch()
        .finally({/*loading*/})

        if(categoryId) {
            getProducts
            .then((res) => setProducts(res.filter(prod => prod.categoria === categoryId)))
            .finally(() => setPreloader(false));

        } else {
            getProducts
            .then((res) => setProducts(res))
            .finally(() => setPreloader(false));
        }
    }, [categoryId])

    return (
        <>
            <h2 className='welcome'>Hola <b id='welcome--name'>{ greeting }</b>, bienvenido/a a nuestra tienda online!</h2>
            <ItemList items={products} preload={preloader}/>
        </>
    )
}

ItemListContainer.defaultProps = { greeting: 'user' };

export default ItemListContainer;