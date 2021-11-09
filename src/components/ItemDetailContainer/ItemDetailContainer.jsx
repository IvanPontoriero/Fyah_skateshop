import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail.jsx';
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

const ItemDetailContainer = () => {

    const {id} = useParams()
    const [items, setItems] = useState({});
    
    useEffect(() => {
        const getItems = new Promise((resolve, reject) => {
            setTimeout(() => {
                products ? resolve(products) : reject("error 404")
            }, 2000);
        });
        getItems.then((resolve) => {
            setItems(resolve.filter(item => item.id === 0))
            console.log('container', resolve);
        })
        //   .catch((err) => console.log(err))
        //   .finally(() => setLoading(false));
    }, [id]);
    return (
        <div className='item__detail--container'>
            <ItemDetail item={ items } />
        </div>
    )
};

export default ItemDetailContainer;