import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../service/getFirestore.js';
import ItemList from './ItemList.jsx';
// import PropTypes from 'prop-types puede ser usada para verificar el tipo de propiedad a pasar a un component e indicar si es requerida 
// e.g. ItemListContainer.PropTypes = { greeting: PropTypes.number.isRequired } 

const ItemListContainer = ({greeting}) => {
    
    const [products, setProducts] = useState([]);
    const [preloader, setPreloader] = useState(true);

    const {categoryId} = useParams();

    useEffect(() => {

        const dbQuery = getFirestore(); //conexion con firestore
        const itemCollection = dbQuery.collection('items');
        dbQuery.collection('items').get() //traemos toda la colleccion de datos con .get() y con .doc(#idDelItem) traemos un solo item
        .then(data => setProducts( data.docs.map(prod => ({ categoryId: prod.categoryId, ...prod.data()}))))
        .catch()
        .finally(() => setPreloader(false))

        if(categoryId) {
            itemCollection.where("categoryId", "==", categoryId).get()
            .then((snapshot) => {
                if (snapshot.size > 0) {
                    setProducts(
                        snapshot.docs.map((doc) => {
                            return { id: doc.id, ...doc.data() };
                        })
                    );
                }
            });
        } else {
            itemCollection.get()
            .then((snapshot) => {
                if (snapshot.size > 0) {
                    setProducts(
                        snapshot.docs.map((doc) => {
                            return { id: doc.id, ...doc.data() };
                        })
                    );
                }
            });
        }
    }, [categoryId])

    return (
        <>
            <h2 className='welcome'><b id='welcome--name'>{ greeting }</b></h2>
            <ItemList items={products} preload={preloader}/>
        </>
    )
}

ItemListContainer.defaultProps = { greeting: 'POPULAR' };

export default ItemListContainer;