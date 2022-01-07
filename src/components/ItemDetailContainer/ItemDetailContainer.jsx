import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../service/getFirestore.js';
import ItemDetail from './ItemDetail.jsx';


const ItemDetailContainer = () => {

    const {id} = useParams();

    const [items, setItems] = useState({});
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {

        const dbQuery = getFirestore(); //conexion con firestore
        const items = dbQuery.collection("items").doc(id).get() //traemos toda la colleccion de datos con .get() y con .doc(#idDelItem) traemos un solo item
        .then((res) => setItems({ id: res.id, ...res.data()}))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
        return items;
    }, [id]);
    return (
        <div className='item__detail--container'>
            <ItemDetail item={ items } load={loading}/>
        </div>
    )
};

export default ItemDetailContainer;