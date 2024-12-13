import {NavBar} from './../Components/NavBar.jsx';
import {NavCategories} from "./../Components/NavCategories.jsx"
import {Carousel} from '../Components/Carrousel.jsx';

export const Principal = () =>{
    return(
        <div>
            <NavBar/>
            <NavCategories/>
            <Carousel/>
        </div>
    );
}