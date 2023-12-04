import CartWidget from "./CartWidget/CartWidget"
import leaf from "/ecommerce/public/leaf.svg"
import './NavBar.css'
import { useState } from "react"
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`navBar ${isOpen ? 'open' : ''}`}>
            <NavLink to="/">
                <img src={leaf} alt="Logo" />
            </NavLink>

            <div className="menu-button" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/category/category">Nuestras Plantas</NavLink></li>
                <li><NavLink to="/contacto">Contacto</NavLink></li>
            </ul>


            <CartWidget />
        </nav>

    )
}
export default NavBar