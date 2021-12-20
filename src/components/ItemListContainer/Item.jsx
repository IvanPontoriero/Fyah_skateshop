import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const Item = ({item}) => {
    return (
        <Link to={'/item/' + item.id}>
            <Card key={ item.id } border="warning" style={{ width: '30rem' }} className='item--container'>
                <Card.Img variant="top" src={item.img} /><hr/>
                <Card.Body>
                    <Card.Title className='item__list--title'>${item.price}</Card.Title><br/>
                    <Card.Text className='item__list--body'>
                        {item.name}
                    </Card.Text>
                    {/*<Link to={'/item/' + item.id}><button className='detail__btn' >Ver detalle</button></Link>*/}
                </Card.Body>
            </Card>
        </Link>
    )
};

export default Item;