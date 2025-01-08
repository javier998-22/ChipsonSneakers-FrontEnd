import React, { useState } from 'react';
import './../Styles/Login.css';

export const Login = () => {
    const [isVisible, setIsVisible] = useState(true);

    const closeLogin = () => setIsVisible(false);

    if (!isVisible) return null;

    return (
        <div className="overlay">
            <div className="login-form">
                <h2>Iniciar Sesión</h2>
                <input type="text" placeholder="Usuario" />
                <input type="password" placeholder="Contraseña" />
                <div className="divB">
                    <button className="iniciar-btn">Iniciar Sesión</button>
                    <button className="close-btn" onClick={closeLogin}>Cerrar</button>
                </div>
                <div>
                    <p>No tienes Cuenta? <a href="/signup">Regístrate</a></p>
                </div>
            </div>
        </div>
    );
};

