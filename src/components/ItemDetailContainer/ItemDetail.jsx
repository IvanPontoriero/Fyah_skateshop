import ItemCount from '../ItemCount/ItemCount.jsx';
import Card from 'react-bootstrap/Card';


const ItemDetail = ({item}) => {
    <Card border="warning" style={{ width: '30rem' }} className='item--container'>
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                    Precio: ${item.price} <br/>
                    {item.detail}
                </Card.Text>
                <ItemCount title={item.name} stock={item.stock} initial={0}/>
                <button className='btn__detalle'>Ver detalle</button>
            </Card.Body>
        </Card>
}

export default ItemDetail;