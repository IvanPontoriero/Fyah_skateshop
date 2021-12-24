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
        console.log('cantidad: ' + quant);
    }
    console.log(cart);

    return (
        <>
            {load ? <Spinner animation="grow" variant="dark" /> 
            : <div className='item__detail--container' key={item.id}>
                <div className='item__detail--img'>
                    <img src={item.img} alt='imagen del producto'/>
                </div>
                <div className='item__detail--description'>
                    <p>{item.category}</p><br/><br/>
                    <h2>{item.name}</h2>
                    <h4>{item.price}</h4>
                    <p>Podés pagar en 3 cuotas de {item.price / 3}</p>
                </div>
                <div className='item__detail--btns'>
                    { clicked ? (
                        <div>
                            <GoToCart /> 
                            <SeguirComprando />
                        </div>
                        ) : (
                            <ItemCount title={item.name} stock={item.stock} initial={1} onAdd={handleAdd} />
                    )}
                </div>
            </div>}
        </>
    )
};

export default ItemDetail;