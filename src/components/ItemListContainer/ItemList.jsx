import Item from './Item.jsx';
import Spinner from 'react-bootstrap/Spinner';

const ItemList = ({items, preload}) => {

    return (
        <div className='item__list--container'>
            { preload ? <Spinner animation="grow" variant="dark" /> : items.map((prod) => {
                return <Item key={prod.id} item={prod} preload={preload}/>
            })}
        </div>
    )
}

export default ItemList;