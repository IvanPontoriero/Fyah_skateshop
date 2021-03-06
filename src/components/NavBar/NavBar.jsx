import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import { useCartContext } from '../../context/CartContext.jsx'
import CartWidget from './CartWidget.jsx';
import FYAH from '../../assets/FYAH.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return (
        <header className='header--container'>
            <div className='nav--container'>
                <Navbar collapseOnSelect expand="lg" className='nav'>
                    <Container>
                    <Link to='/'><Navbar.Brand ><img src={ FYAH } alt='logo' height='101.25px' width='180px'/></Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto navmenu" >
                        <Nav.Item className="nav-item" ><Link to='/' className='nav-link'>Inicio</Link></Nav.Item>
                        <NavDropdown title="Marcas" id="collasible-nav-dropdown">
                            <NavDropdown.Item ><Link  to='/' className='nav-link'>Nike</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link  to='/' className='nav-link'>Stussy</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link  to='/' className='nav-link'>Vans</Link></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Indumentaria" id="collasible-nav-dropdown">
                            <NavDropdown.Item ><Link to='/categoria/camisas' className='nav-link'>Camisas</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link to='/categoria/remeras' className='nav-link'>Remeras</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link to='/categoria/pantalones' className='nav-link'>Pantalones</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link to='/categoria/hoodies-zippers' className='nav-link'>Hoodies/Zippers</Link></NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Item className="nav-item" ><Link to='/categoria/zapatillas' className='nav-link'>Zapatillas</Link></Nav.Item>
                        </Nav>
                        <Nav className='nav--aside'>
                            <Link to='/login'>Ingresar</Link>
                            <Nav.Link eventKey={2} href='/sign-up'>
                                Registrarme
                            </Nav.Link>
                            <Link to='/cart'><CartWidget /></Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </header>
    )
}

export default NavBar;