import React from 'react';
import { useState } from 'react';

const ItemCount = ({ title, stock, initial }) => {

    const [count, setCount] = useState(initial);

    const sumItem = () => {
        count < stock ? setCount(count + 1) : alert(`Superaste el stock disponible de ${title}`);
    }

    const restItem = () => {
        count >= 1 ? setCount(count - 1) : alert('No puedes agregar menos de 1 producto');
    }

    const onAdd = () => {
        count >= 1 ? alert(`Agregaste ${count} unidades del producto ${title} al carrito`) : alert('Debes seleccionar un producto para añadir al carrito')
    }

    return (
        <>
            <div className='item--counter'>
                <button className='item--counter__btn' onClick={restItem}> - </button>
                <label className='label--counter'> {count} </label>
                <button className='item--counter__btn' onClick={sumItem}> + </button>
            </div>
            <button className='onAdd__btn' onClick={onAdd}>Agregar</button>
        </>
    )
}

export default ItemCount;