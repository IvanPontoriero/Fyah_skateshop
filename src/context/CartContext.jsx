import { useState, useEffect, createContext, useContext } from 'react';

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({children}) => {

    const [ cart, setCart ] = useState([]);
    const [ cartLength, setCartLength]  = useState(0);
    const [ precioTotal, setPrecioTotal ] = useState(0);

    const addItem = (item, quantity) => {
        if (cart.length !== 0) {
            const index = cart.findIndex(obj => { return obj.item.id === item.id; })
            if (index !== -1) {
                const newCart = cart;
                newCart[index].quantity = newCart[index].quantity + quantity;
                setCart(newCart);
            }
            else setCart([...cart, { item, quantity: quantity }]);
        }
        else setCart([{ item, quantity: quantity }]);

        setCartLength(cartLength + quantity);
    }

    const removeItem = (itemId, quantity) => {
        setCart(cart.filter((item) => item.id !== itemId));
        setCartLength(cartLength - quantity)
    }

    const clear = () => {
        setCart([]);
    }

    useEffect(() => {
        let total = 0;
        let cantTotal = 0;
        for(let cartItem of cart) {
            cantTotal += cartItem.cant;
            total += cartItem.cant * cartItem.item.price;
        };
        setPrecioTotal(total);
        setCartLength(cantTotal);
    }, [cart]);

    
    return (
        <CartContext.Provider value={{cart, cartLength, precioTotal, addItem, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    )
}