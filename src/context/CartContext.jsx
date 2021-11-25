import { useState, useEffect, createContext, useContext } from 'react';

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({children}) => {

    const [ cart, setCart ] = useState([]);

    const isInCart = (item) => {
        return cart.some(cartItem => cartItem.id === item.id)
    }

    const addItem = (item, quantity) => {
        if (isInCart(item)){
            cart.map((cartItem) => {cartItem.id === item.id ? (cartItem.quantity += quantity) : cartItem});
        } else {
            setCart([...cart, {...item, quantity}]);
        }
    }

    const removeItem = (itemId) => {
        setCart(cart.filter((item) => item.id !== itemId));
    }

    const totalPrice = () => {
        return cart.reduce((acc, cur) => (acc * cur, cur))
    }

    const clear = () => {
        setCart([]);
    }

    useEffect(() => {
        console.log(cart)
    }, [cart]);
    
    return (
        <CartContext.Provider value={{cart, addItem, removeItem, totalPrice, clear}}>
            {children}
        </CartContext.Provider>
    )
}