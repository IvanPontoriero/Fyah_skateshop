import { Link } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';

const GoToCart = () => {
    return(
        <Link to='/cart'>
            <button className='irAlCarrito--btn'>Ir al carrito <MdShoppingCart /></button>
        </Link>
    )
}

export default GoToCart;