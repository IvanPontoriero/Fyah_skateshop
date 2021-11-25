import React, { useState, useEffect } from 'react';
import {useCartContext} from '../../context/CartContext';
import {getFirestore} from '../../service/getFirestore.js';

// const userCart = 
// {buyer: {
//         name:"Federico Osito",
//         phone: "123123123",
//         email: "ositofede@gmail.com"
//     }, 
//     items: [{
//         id: 2,
//         title: "Nike x Stussy White Tee",
//         price: 10000
//     }], 
//     total:  10000}

const Cart = () => {
    
    // const { addItem, removeItem, clear, totalPrice } = useCartContext();
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

    //         return {id, price, name};
    //     })

    //     order.total = totalPrice();
    // }

    // const db = getFirestore();
    // db.collection('orders').then().add(order)
    // .then(res => console.log(res))
    // .catch(err => console.log(err))

    return (
        <div className='cart--container'>
            <div>
                
            </div>
            <form className='cart__form--container'>
                <label></label>
                <input></input>
                <label></label>
                <input></input>
                <label></label>
                <input></input>
                <button></button>
            </form>
        </div>
    )
}

export default Cart;
