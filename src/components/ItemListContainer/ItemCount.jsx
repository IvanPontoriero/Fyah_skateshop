import React from 'react';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

const ItemCount = ({img, title, text, stock, initial}) => {

    const [count, setCount] = useState(initial);

    const sumItem = () => {
        count < stock ? setCount(count + 1) : alert(`Superaste el stock disponible de ${title}`);
    }

    const restItem = () => {
        count >= 1 ? setCount(count - 1) : alert('No puedes agregar menos de 1 producto');
    }

    const onAdd = () => {
        alert(`Agregaste ${count} unidades del producto ${title} al carrito`)
    }

    return (
        <>
        <Card border="warning" style={{ width: '30rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
                <div className='item--counter'>
                    <button className='item--counter__btn' onClick={restItem}> - </button>
                    <label className='label--counter'> {count} </label>
                    <button className='item--counter__btn' onClick={sumItem}> + </button>
                </div>
                <button className='onAdd__btn' onClick={onAdd}>Agregar</button>
            </Card.Body>
        </Card>
        </>
    )
}

export default ItemCount;