import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount.jsx';
import GoToCart from '../Cart/GoToCart';
import { useCartContext } from '../../context/CartContext';
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';

const ItemDetail = ({item, load}) => {

    const [clicked, setClicked] = useState(false);
    const { cart, addToCart } = useCartContext();

    const handleAdd = (quant) => {
        setClicked(true);
        addToCart({...item, quantity: quant});
        console.log('cantidad: ' + quant);
    }
    console.log(cart);

    return (
        <>
            {load ? <Spinner animation="grow" variant="dark" /> : <Card key={ item.id } border="warning" style={{ width: '30rem' }} className='item--container'>
                <Card.Img variant="top" src={item.img}  alt='imagen del producto'/>
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                            Precio: ${item.price} <br/>
                            {item.description}
                        </Card.Text>
                        { clicked ? (
                        <GoToCart /> 
                        ) : (
                        <ItemCount title={item.name} stock={item.stock} initial={0} onAdd={handleAdd} />
                        )}
                    </Card.Body>
            </Card>}
        </>
    )
};

export default ItemDetail;