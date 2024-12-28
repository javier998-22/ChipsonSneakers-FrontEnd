import { BsCart3 } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

import './../Styles/NavBar.css';
import Logo from "../logo.jpeg";

export const NavBar = () => {

    const navigate = useNavigate();

    const irAsignup = () => {
        navigate('/signup'); 
    }; 
    
    const irAlogin = () => {
        navigate('/login'); 
    }; 
    

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={Logo} className="logo" />
                <span className="categories-text">Chips on Sneakers</span>
            </div>
            <div className="navbar-search">
                <input
                    type="text"
                    placeholder="Buscar productos..."
                    className="search-bar"
                />
            </div>
            <div className="navbar-right">
                <button className="login-btn" onClick={irAlogin} >Iniciar Sesión</button>
                <button className="su-btn" onClick={irAsignup} >Crear Cuenta</button>
                <div className="cart-cont">
                    <BsCart3 className="cart" />
                </div>
            </div>
        </nav>
    );
}