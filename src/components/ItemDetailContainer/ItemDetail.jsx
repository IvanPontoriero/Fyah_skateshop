import { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount.jsx';
import GoToCart from '../Cart/GoToCart';
import SeguirComprando from '../ItemDetailContainer/SeguirComprando';
import Spinner from 'react-bootstrap/Spinner';

const ItemDetail = ({item, load}) => {

    const [clicked, setClicked] = useState(false);
    const { cart, addItem } = useCartContext();

    const handleAdd = (quant) => {
        setClicked(true);
        addItem({...item, quant});
    }

    return (
        <>
            {
            load ? <Spinner animation="grow" variant="dark" /> 
            : <div className='item__detail' key={item.id}>
                <div className='item__detail--img'>
                    <img src={item.img} alt='imagen del producto' className='item__detail--img'/>
                </div>
                <div className='item__detail--aside'>
                    <div className='item__detail--description'>
                        <p>{item.category}</p><br/><br/>
                        <h2>{item.name}</h2><br/>
                        <h4>${item.price}</h4><br/>
                        <p>Podés pagar en 3 cuotas de ${item.price / 3}</p>
                    </div><br/><br/>
                    <div className='item__detail--btns'>
                        { clicked ? (
                            <div>
                                <GoToCart /><br/>
                                <SeguirComprando />
                            </div>
                            ) : (
                                <ItemCount title={item.name} stock={item.stock} initial={1} onAdd={handleAdd} />
                        )}
                    </div>
                </div>
            </div>
            }
        </>
    )
};

export default ItemDetail;