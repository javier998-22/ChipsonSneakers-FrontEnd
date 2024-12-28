import './../Styles/ProductsMain.css';

import { useNavigate } from 'react-router-dom';

export const NuevasDestacadas = () => {

    const navigate = useNavigate();

    const irAproduct = () => {
        navigate('/product'); 
    }; 
    

    return(
    <div className="Card1">
        <h1 className='titleR'>Nuevas y Destacadas</h1>
        <div className="product-card" onClick={irAproduct}>
            {/* Imagen del producto */}
            <div className="product-image-container">
                <img
                    src="https://via.placeholder.com/150x100" 
                    alt="Jordan Jumpman Jack TR"
                    className="product-image"
                />
                <button className="favorite-button">♡</button>
            </div>

            {/* Información del producto */}
            <div className="product-details">
                <p className="product-title">
                    Jordan Jumpman Jack TR<br />Travis Scott Dark Mocha
                </p>
                <p className="lowest-ask">Precio</p>
                <p className="product-price">$368</p>
            </div>
        </div>
    </div>  
    
    )
    
}