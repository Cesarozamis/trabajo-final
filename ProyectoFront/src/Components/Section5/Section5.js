import React from 'react';
import Formulario from './Formulario';
const Section5 = () => {
    return (
        <div>
            <div className="formulario_globo">
                <div className="formulario_globo__form" id="contact">
                    <div className="formulario_globo__content">
                        <h4 className="formulario_globo__content__h4">Contacto</h4>
                        <h4><span className='formulario_globo__content_text_orange'>Gracias por comunicarse!</span> </h4>
                        <Formulario/>
                    </div>
                    <div className="formulario_globo__imagen-contacto">
                        <img src="./images/contact.png" alt="contacto"/>
                    </div>
                </div>
            </div>
            <footer>
                <div className="pie-pagina">
                    <p className="pie-pagina__p5"><sup>2022 © Todos los derechos reservados</sup></p>
                    <div className="footer_logo">
                        <img className="pie-pagina__footer-logo" src="./images/sin título.png" alt="Logo"/>
                    </div>
                </div>
            </footer>
        </div>




        
    )
}

export default Section5
