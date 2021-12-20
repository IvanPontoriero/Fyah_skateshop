import React from 'react';
import { GiShoppingBag } from 'react-icons/gi';
import { Link } from "react-router-dom";
import { useCartContext } from '../../context/CartContext';

const CartWidget = () => {
        const { cartLength } = useCartContext();
        return <>
        { cartLength === 0 && <span></span>}
        { cartLength > 0 && 
            <Link to='/cart'>
                <GiShoppingBag />
                <span className='show__length'>
                    { cartLength }
                </span>
            </Link>
        }
        </>
}
export default CartWidget;