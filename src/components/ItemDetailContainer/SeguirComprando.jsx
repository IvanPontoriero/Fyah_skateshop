import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const SeguirComprando = () => {
    return (
        <Link to='/'>
            <Button className='irAlCarrito--btn'>Segur comprando</Button>
        </Link>
    )
}

export default SeguirComprando;