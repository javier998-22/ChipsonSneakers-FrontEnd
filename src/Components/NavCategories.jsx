import './../Styles/NavCategories.css';
import { BsCart3 } from "react-icons/bs";
import Logo from "../logo.jpeg";
export const NavCategories = () => {
    return (
        <nav className="navbarC">
            <div className="navbar-items">
                <p>Ofertas</p>
                <p>Nuevos</p>
                <p>Hombres</p>
                <p>Mujeres</p>
                <p>Niños</p>
                <p>Verano</p>
                <p>Accesorios</p>
            </div>
        </nav>
    );
}