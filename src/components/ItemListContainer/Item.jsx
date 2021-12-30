import { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { useAuthContext } from '../../context/AuthContext';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';

const Item = ({item}) => {
    const { wishActive, setWishActive } = useState(false);
    const { addToWishlist, deleteFromWishList } = useAuthContext();

    const inWishList = () => {
        addToWishlist(item)
        setWishActive(true)
    }

    const delWishList = () => {
        deleteFromWishList(item.id)
        setWishActive(false)
    }

    return (
        <Link to={'/item/' + item.id}>
            <Card key={ item.id } border="warning" style={{ width: '30rem' }} className='item--container'>
                <Card.Img variant="top" src={item.img} /><hr/>
                <Card.Body>
                    <Card.Title className='item__list--title'>${item.price}</Card.Title><br/>
                    <Card.Text className='item__list--body'>
                        {item.name}
                    </Card.Text>
                    { !wishActive 
                    ? <button onClick={inWishList}>
                        <AiOutlineHeart/>
                    </button>
                    : <button onClick={delWishList}>
                        <AiFillHeart/>
                    </button>}
                </Card.Body>
            </Card>
        </Link>
    )
};

export default Item;