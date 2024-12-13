import React, { useState } from 'react';
import "../Styles/Carrousel.css"
import img1 from "../img/img1.jpeg";
import img2 from "../img/img2.jpeg";
import img3 from "../img/img3.jpeg";
export const Carousel = () => {
    const images = [
        img1,
        img2,
        img3,
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="carousel">
            {/* Contenedor de Imagen */}
            <div className="carousel-image-container">
                <button className="carousel-button prev" onClick={handlePrevClick}>
                    ❮
                </button>
                <img
                    src={images[currentIndex]}
                    alt={`Imagen ${currentIndex + 1}`}
                    className="carousel-image"
                />
                <button className="carousel-button next" onClick={handleNextClick}>
                    ❯
                </button>
            </div>
        </div>
    );
};
