import { useState, useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount.jsx';
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';
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

const Item = () => {

    const [products, setProducts] = useState([]);
    const [preloader, setPreloader] = useState(true);

    useEffect(() => {
        getProducts
        .then((res) => setProducts(res))
        .finally(() => setPreloader(false));
    }, [])

    return (
        <>
        { preloader ? <Spinner animation="grow" variant="dark" /> : products.map(prod =>
        <Card key={ prod.id } border="warning" style={{ width: '30rem' }} className='item--container'>
            <Card.Img variant="top" src={prod.img} />
            <Card.Body>
                <Card.Title>{prod.name}</Card.Title>
                <Card.Text>
                    Precio: ${prod.price} <br/>
                    {prod.description}
                </Card.Text>
                <ItemCount title={prod.name} stock={prod.stock} initial={0}/>
            </Card.Body>
        </Card>)}
        </>
    )
}

export default Item;