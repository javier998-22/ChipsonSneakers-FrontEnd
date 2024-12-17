import './../Styles/ProductsMain.css';

export const ProductsMain = () => {
    return(
    <div className="Card1">
        <h1 className='titleR'>Recomendadas para ti</h1>
        <div className="product-card">
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