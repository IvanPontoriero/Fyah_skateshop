import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail.jsx';

const ItemDetailContainer = () => {
    
    const [items, setItems] = useState([]);

    const getItems = new Promise((res, rej) => {
        setTimeout(() => {
            res(items)
        }, 2000);
    });

    return (
        <div className='item__detail--container'>
            {/*<ItemDetail />*/}
        </div>
    )
}

export default ItemDetailContainer;