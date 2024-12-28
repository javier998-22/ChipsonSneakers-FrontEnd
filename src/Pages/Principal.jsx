import { NavBar } from './../Components/NavBar.jsx';
import { NavCategories } from "./../Components/NavCategories.jsx"
import { Carousel } from '../Components/Carrousel.jsx';
import { ProductsMain } from '../Components/ProductsMain.jsx';
import { NuevasDestacadas } from '../Components/NuevasDestacadas.jsx';

import './../Styles/Principal.css';

export const Principal = () => {
    return (
        <div className="principal-container">
            <NavBar />
            <NavCategories />
            <div className="principal-content">
                <Carousel />
                <ProductsMain />
                <NuevasDestacadas />
            </div>
        </div>
    );
}