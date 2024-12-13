import './../Styles/NavBar.css';
import { BsCart3 } from "react-icons/bs";
import Logo from "../logo.jpeg";
export const NavBar = () => {
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
                <button className="login-btn">Iniciar Sesión</button>
                <button className="su-btn">Crear Cuenta</button>
                <div className="cart-cont">
                    <BsCart3 className="cart" />
                </div>
            </div>
        </nav>
    );
}