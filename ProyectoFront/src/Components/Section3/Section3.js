import React from 'react'
const Section3 = () => {
    return (
        <article className="section3 container-fluid" id="products">
            <div className="section3__casa">
                <div className="section3__recuardoNaranja">
                    <div id="segundo_carousel" className="carousel slide section3_carousel" data-bs-ride="carousel">
                        <div className="carousel-inner section3_carousel_texto">
                            <div className="carousel-item active">
                                <p className="segundo_carousel_texto1">Venta de materiales.</p>
                                <h3 className="segundo_carousel_titulo">Mejores precios</h3>
                                <p className="segundo_carousel_texto2">Acopio en galpón propio</p>
                            </div>
                            <div className="carousel-item">
                                <p className="segundo_carousel_texto1">Mano de obra especializada.</p>
                                <h3 className="segundo_carousel_titulo">Asesoramiento</h3>
                                <p className="segundo_carousel_texto2">Consultas y asesoramiento permanente por profesionales altamente calificados </p>
                            </div>
                            <div className="carousel-item">
                                <p className="segundo_carousel_texto1">Red de distribución.</p>
                                <h3 className="segundo_carousel_titulo">Más cerca</h3>
                                <p className="segundo_carousel_texto2">Estamos presentes en todo el pais.</p>
                            </div>
                        </div>
                        <div className="section3_botones">
                            <button className="carousel-control-prev section3_botones1" type="button" data-bs-target="#segundo_carousel"
                                data-bs-slide="prev"><img src='../images/button/left.svg'alt='...'></img>
                            </button>
                            <button className="carousel-control-next section3_botones2" type="button" data-bs-target="#segundo_carousel"
                                data-bs-slide="next"><img src='../images/button/right.svg'alt='...'></img>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    
    )
}
export default Section3
