import ItemCount from '../ItemCount/ItemCount.jsx';
import Card from 'react-bootstrap/Card';

const ItemDetail = ({item}) => {
    return (
        <Card key={ item[0].id } border="warning" style={{ width: '30rem' }} className='item--container'>
            <Card.Img variant="top" src={item[0].img}  alt='imagen del producto'/>
            <Card.Body>
                <Card.Title>{item[0].name}</Card.Title>
                <Card.Text>
                        Precio: ${item[0].price} <br/>
                        {item[0].description}
                    </Card.Text>
                    <ItemCount title={item[0].name} stock={item[0].stock} initial={0}/>
                </Card.Body>
        </Card>
    )
};

export default ItemDetail;