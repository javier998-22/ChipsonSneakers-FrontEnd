import { NavBar } from './../Components/NavBar.jsx';
import { NavCategories } from "./../Components/NavCategories.jsx"
import { Carousel } from '../Components/Carrousel.jsx';
import { ProductsMain } from '../Components/ProductsMain.jsx';
import { NuevasDestacadas } from '../Components/NuevasDestacadas.jsx';

export const Principal = () =>{
    return(
        <div>
            <NavBar/>
            <NavCategories/>
            <div>
            <Carousel/>
            <ProductsMain/>
            <NuevasDestacadas/>
            </div>

        </div>
    );
}