import React from 'react';
import CartWidget from './CartWidget.jsx';
import FYAH from '../../assets/FYAH.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return (
        <header className='header--container'>
            <div className='nav--container'>
                <nav className='nav'>
                    <img src={ FYAH } alt='logo' height='101.25px' width='180px'/>
                    <ul className='navmenu'>
                        <li>Home</li>
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
                        <a><CartWidget /></a>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default NavBar;