import './Contacto.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
const Contacto = () => {
    const [mostrarAgradecimiento, setMostrarAgradecimiento] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setMostrarAgradecimiento(true);
    };
    return (
        <div className="contacto-container">
            <h1>Contacto</h1>
            <form className="contacto-form" onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" placeholder='Tu nombre..' />

                <label htmlFor="email">Correo electrónico:</label>
                <input type="email" id="email" name="email" placeholder='Tu e-mail..'/>

                <label htmlFor="mensaje">Mensaje:</label>
                <textarea id="mensaje" name="mensaje" rows="4" placeholder='Tu mensaje..'></textarea>

                <button type="submit">{mostrarAgradecimiento ? '¡Gracias por tu mensaje!' : 'Enviar'}</button>
            </form>

            
            
            <div className="social-media-section">
                <h2>Síguenos en redes sociales:</h2>
                <div className="social-icons">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='icons'>
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://twitter.com/gonzalo_corb0" target="_blank" rel="noopener noreferrer" className='icons'>
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://www.instagram.com/gonchy___/" target="_blank" rel="noopener noreferrer" className='icons'>
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contacto;
