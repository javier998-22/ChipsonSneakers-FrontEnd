import './../Styles/Login.css';

export const Login = () => {
    return (
        <div className="container">
            <div className="login-form">
                <h2>Iniciar Sesión</h2>
                <input type="text" placeholder="Usuario" />
                <input type="password" placeholder="Contraseña" />
                <div className='divB'>
                    <button>Iniciar Sesión</button>
                </div>
                <div>
                    <p>No tienes Cuenta? <href>Registrate</href></p>
                </div>
            </div>
        </div>
    );
}

