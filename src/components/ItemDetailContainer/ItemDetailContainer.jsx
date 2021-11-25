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

const ItemDetailContainer = () => {

    const {id} = useParams();

    const [items, setItems] = useState({});
    const [prod, setProd] = useState({});
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {

        // const dbQuery = getFirestore(); //conexion con firestore
        // dbQuery.collection('items').doc('ZbDHTtWsL8vo1CBj7Gmq').get() //traemos toda la colleccion de datos con .get() y con .doc(#idDelItem) traemos un solo item
        // .then(res => setProd({ id: res.id, ...res.data()}));

        const getItems = new Promise((resolve, reject) => {
            setTimeout(() => {
                products ? resolve(products) : reject("error 404")
            }, 2000);
        });
        getItems.then((resolve) => {
            setItems(resolve.find(item => item.id === parseInt(id)))
            console.log('container', resolve);
        })
          .catch((err) => console.log(err))
          .finally(() => setLoading(false));
    }, [id]);
    return (
        <div className='item__detail--container'>
            <ItemDetail item={ items } load={loading}/>
        </div>
    )
};

export default ItemDetailContainer;