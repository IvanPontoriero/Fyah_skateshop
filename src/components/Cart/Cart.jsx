import React, { useState } from 'react';
import {useCartContext} from '../../context/CartContext';
import ModalComponent from '../Modals/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { GrFormClose } from 'react-icons/gr';
import { AiOutlineHeart } from 'react-icons/ai';
import { GiBroom } from 'react-icons/gi';

const Cart = () => {
    
    const { cart, removeItem, clear, precioTotal } = useCartContext();
    const [ modal, setModal ] = useState(false);

    return (
        <>
        { !cart.length ? (
            <div className='cart--container'>
                <h1>TU CARRITO ESTÁ  VACÍO!</h1>
                <Link to='/'>
                    <Button variant="dark">Ir a la tienda</Button>
                </Link>
            </div> 
        ) : (
        <div className='cart--container'>
        <h1>TU CARRITO</h1>
            <div className='cart--header'>
                <span>Producto</span>
                <span>Detalle</span>
            </div>
            {cart.map( item => 
                <div class='itemCartTable'>
                    <div className='imgCol'><img src={item.item.img} alt={item.item.name}/></div>
                    <div className='centralCol'>
                        <p>
                            <span>{item.item.name}</span>
                        </p>
                        <p>
                            <label>Cantidad:</label>
                            <span>{item.item.quant}</span>
                        </p>
                    </div>
                    <div className='priceCol'>
                        <p>{item.item.description}</p>
                        <p>${item.item.price }</p>
                    </div>
                    <div>
                        <button className='delete__item--btn' onClick={() => removeItem(item, item.item.quantity)}><GrFormClose/></button>
                        <AiOutlineHeart/>
                    </div>
                </div> 
                )}
                <div className='cart--aside'>
                    <div className='cart__resume'>
                        <h3>RESUMEN DEL PEDIDO</h3>
                        <p>{cart.quant} Productos</p>
                        <p className='cart--subtitle'>Total ${precioTotal}</p>
                        <Button className='clear__cart--btn' onClick={clear}>Limpiar carrito <GiBroom/></Button>
                        <Button variant="dark" onClick={() => setModal(true)}>Finalizar compra</Button>
                        <ModalComponent show={modal} onHide={() => setModal(false)}/>
                    </div>
                </div>
        </div>
        )}    
        </>
    )
}

export default Cart;
