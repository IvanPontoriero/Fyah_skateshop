import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget.jsx';
import FYAH from '../../assets/FYAH.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return (
        <header className='header--container'>
            <div className='nav--container'>
                {/* <nav className='nav'>
                    <Link to='/'><img src={ FYAH } alt='logo' height='101.25px' width='180px'/></Link>
                    <ul className='navmenu'>
                        <Link to='/'><li>Home</li></Link>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" dataBsToggle="dropdown" ariaExpanded="false">
                                Marcas
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark" ariaLabelledBy="navbarDarkDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Converse</a></li>
                                <li><a className="dropdown-item" href="#">New Balance</a></li>
                                <li><a className="dropdown-item" href="#">Vans</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" dataBsToggle="dropdown" aria-expanded="false">
                                Indumentaria
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark" ariaLabelledby="navbarDarkDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Camisas</a></li>
                                <li><a className="dropdown-item" href="#">Remeras</a></li>
                                <li><a className="dropdown-item" href="#">Hoodies/Zippers</a></li>
                                <li><a className="dropdown-item" href="#">Pantalones</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" dataBsToggle="dropdown" ariaExpanded="false">
                                Zapatillas
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark" ariaLabelledby="navbarDarkDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Converse</a></li>
                                <li><a className="dropdown-item" href="#">New Balance</a></li>
                                <li><a className="dropdown-item" href="#">Vans</a></li>
                            </ul>
                        </li>
                        <li>Accesorios</li>
                    </ul>
                    <div className='nav--aside'>
                        <a>Ingresar</a>
                        <a>Registrarme</a>
                        <a></a>
                    </div>
                </nav> */}
                    <Navbar collapseOnSelect expand="lg" className='nav'>
                        <Container>
                        <Link to='/'><Navbar.Brand ><img src={ FYAH } alt='logo' height='101.25px' width='180px'/></Navbar.Brand></Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto" className='navmenu'>
                            <Link to='/'><Nav.Link className="nav-item" >Inicio</Nav.Link></Link>
                            <NavDropdown title="Marcas" id="collasible-nav-dropdown">
                                <NavDropdown.Item >Nike</NavDropdown.Item>
                                <NavDropdown.Item >Stussy</NavDropdown.Item>
                                <NavDropdown.Item >Vans</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Indumentaria" id="collasible-nav-dropdown">
                                <NavDropdown.Item >Camisas</NavDropdown.Item>
                                <Link to={'/categoria/remeras'}><NavDropdown.Item >Remeras</NavDropdown.Item></Link>
                                <NavDropdown.Item >Pantalones</NavDropdown.Item>
                                <Link to={'/categoria/hoodies-zippers'}><NavDropdown.Item >Hoodies/Zippers</NavDropdown.Item></Link>
                            </NavDropdown>
                            <Link to={'/categoria/zapatillas'}><Nav.Link className="nav-item" >Zapatillas</Nav.Link></Link>
                            </Nav>
                            <Nav className='nav--aside'>
                                <Nav.Link >Ingresar</Nav.Link>
                                <Nav.Link eventKey={2} >
                                    Registrarme
                                </Nav.Link>
                                <CartWidget />
                            </Nav>
                        </Navbar.Collapse>
                        </Container>
                    </Navbar>
            </div>
        </header>
    )
}

export default NavBar;