import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {

    const [count, setCount] = useState(initial);

    const sumItem = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const restItem = () => {
        if (count >= 1) {
            setCount(count - 1)
        }
    }

    const canAdd = () => {
        count >= 1 ? onAdd(count) : alert('Debes seleccionar un producto');
    }

    return (
        <>
            <div className='item--counter'>
                {count >= 1 ? <button className='item--counter__btn' onClick={restItem}> - </button> 
                : <button disabled className='item--counter__btn' onClick={restItem}> - </button>}
                <label className='label--counter'> {count} </label>
                {count !== stock ? <button className='item--counter__btn' onClick={sumItem}> + </button> 
                : <button disabled className='item--counter__btn' onClick={sumItem}> + </button>}
            </div>
            <button className='onAdd__btn' onClick={canAdd}>Agregar al carrito</button>
        </>
    )
}

export default ItemCount;