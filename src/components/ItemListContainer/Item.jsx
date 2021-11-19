import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const Item = ({item}) => {
    return (
        <Card key={ item.id } border="warning" style={{ width: '30rem' }} className='item--container'>
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                    Precio: ${item.price} <br/>
                    {item.description}
                </Card.Text>
                <Link to={'/item/' + item.id}><button className='detail__btn' >Ver detalle</button></Link>
            </Card.Body>
        </Card>
    )
};

export default Item;