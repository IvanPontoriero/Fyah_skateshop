import React, { useState, useEffect } from 'react';
import {useCartContext} from '../../context/CartContext';
import {getFirestore} from '../../service/getFirestore.js';
import Button from 'react-bootstrap/Button';
import { GrFormClose } from 'react-icons/gr';
import { AiOutlineHeart } from 'react-icons/ai';
import { GiBroom } from 'react-icons/gi';


const userCart = 
{buyer: {
        name:"xxxxx",
        phone: "123123123",
        email: "xxxxx@gmail.com"
    }, 
    items: [{
        id: 2,
        title: "Nike x Stussy White Tee",
        price: 10000
    }], 
    total:  10000}

const Cart = () => {
    
    const { cart, addItem, removeItem, clear, totalPrice } = useCartContext();

    console.log('Soy  el cart', cart)
    // const [ formData, setFormData ] = [

    // ]
    
    // const generateOrder = (e) => {
    //     e.preventDefault();

    //     const order = [];

    //     order.buyer = {name: 'Joa', phone: 2645094444, email: 'pontoriero.joaquin@gmail.com'};
    //     order.items = cart.map(cartItem => {
    //         const id = cartItem.id
    //         const price = cartItem.price
    //         const name = cartItem.name
    //        return {id, price, name};
    //     })

    //     order.total = totalPrice();
    // }

    // const db = getFirestore();
    // // db.collection('orders').then().add(order)
    // // .then(res => console.log(res))
    // // // .catch(err => console.log(err))

    return (
        <>
        { cart.lenght === 0 && <div className='cart--container'>
            <h1>TU CARRITO ESTÁ  VACÍO!</h1>
            <Button variant="dark">Ir a la tienda</Button>
        </div> }
        { cart.length > 0 &&
        <div className='cart--container'>
        <h1>TU CARRITO</h1>
            <div class='cart--header'>
                <span>Producto</span>
                <span>Detalle</span>
            </div>
            {cart.map( item => 
                <div class='itemCartTable'>
                    <div class='imgCol'><img src={item.img} alt={item.name}/></div>
                    <div class='centralCol'>
                        <p>
                            <span>{item.name}</span>
                        </p>
                        <p>
                            <label>Cantidad:</label>
                            <span>{item.quantity}</span>
                        </p>
                    </div>
                    <div class='priceCol'>
                        <p>{item.description}</p>
                        <p>${item.price }</p>
                    </div>
                    <div>
                        <a class='delete__item--btn' onClick={() => removeItem(item)}><GrFormClose/></a>
                        <AiOutlineHeart/>
                    </div>
                </div> 
                )}
                <div className='cart--aside'>
                    <Button variant="dark">Finalizar compra</Button>
                    <div className='cart__resume'>
                        <h3>RESUMEN DEL PEDIDO</h3>
                        <p>{cart.quantity} Productos</p>
                        <p className='cart--subtitle'>Total ${totalPrice()}</p>
                        <p className='clear__cart--btn' onClick={clear}>Limpiar carrito <GiBroom/></p>
                    </div>
                </div>
        </div>
        }    
        </>
    )
}

export default Cart;
