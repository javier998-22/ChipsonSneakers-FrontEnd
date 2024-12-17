import React, { useState } from "react";

import './../Styles/NavCategories.css';

export const NavCategories = () => {
    const [activeMenu, setActiveMenu] = useState(null);

    const mostrarMenu = () => {
        setActiveMenu(!activeMenu)
    }


    return (
        <nav className="navbarC">
            <div className="navbar-items">
                <p>Ofertas</p>
                <p onClick={mostrarMenu}
                >Nuevos</p>
                {activeMenu && (
                    <div className="dropdown-menu"
                    onMouseLeave={mostrarMenu}>
                        <div className="dropdown-section">
                            <h4>Top Brands</h4>
                            <p>Nike</p>
                            <p>adidas</p>
                            <p>Fear of God</p>
                            <p>Supreme</p>
                            <p>Crocs</p>
                            <p>BAPE</p>
                            <p>Converse</p>
                        </div>
                        <div className="dropdown-section">
                            <h4>Trending Brands</h4>
                            <p>Kith</p>
                            <p>Pop Mart</p>
                            <p>Denim Tears</p>
                            <p>Balenciaga</p>
                            <p>Louis Vuitton</p>
                            <p>Gucci</p>
                        </div>
                    </div>
                )}
                <p>Hombres</p>
                <p>Mujeres</p>
                <p>Niños</p>
                <p>Verano</p>
                <p>Accesorios</p>
            </div>
        </nav>

    );
}


