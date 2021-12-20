import {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import { getFirestore } from "../../service/getFirestore";
import { useCartContext } from "../../context/CartContext";

const ModalComponent = (props) => {
    
    const { cart, removeItem, totalPrice } = useCartContext();
    
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");    
    const [orderID, setOrderID] = useState(null); 
   
    const generarOrden = (e) => {
            e.preventDefault()
            const buyer = { name, phone, email };
            const db = getFirestore();
            const ordersCollection = db.collection("orders");

            let order = {};
            order.buyer = {buyer};
            order.total = totalPrice;
            order.items = cart.map((cartItem) => {
                const id = cartItem.item.id;
                const title = cartItem.item.title;
                return {id, title}
            })

            ordersCollection.add(order)
            .then((IdDocument) => {
                setOrderID(IdDocument.id)
            })
console.log('idOrden', orderID);

    }

    return (

        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title>Ingrese su datos para finalizar la compra.</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <fieldset>
                    <form onSubmit={generarOrden} >
                        <label>Nombre</label>
                        <input
                            value={name}
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label>Email</label>
                        <input
                            value={email}
                            type="text"
                             onChange={(e) => setEmail(e.target.value)}
                        />
                        <label>Telefono2</label>
                        <input
                            value={phone}
                            type="text"
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <button variant="outline-info" type="submit" className="mt-auto" >
                            Comprar
                         </button>
                    </form>
                </fieldset>
            </Modal.Body>
            <Modal.Footer>
                <button variant="outline-info" type="submit" className="mt-auto" onClick={removeItem}>
                    cerrar
                </button>
            </Modal.Footer>
            <small>{orderID ? ` Su orden fue generada con el ID: ${orderID}` : null}</small>
        </Modal>
    );
}

export default ModalComponent;