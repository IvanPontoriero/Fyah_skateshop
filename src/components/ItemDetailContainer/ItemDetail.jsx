import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount.jsx';
import GoToCart from '../GoToCart/GoToCart';
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';

const ItemDetail = ({item, load}) => {

    const [clicked, setClicked] = useState(false)

    const handleAdd = (quantity) => {
        console.log(quantity);
        setClicked(true);
    }

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