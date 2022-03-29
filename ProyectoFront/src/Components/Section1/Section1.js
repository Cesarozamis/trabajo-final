import React from 'react'
import NavBar from '../NavBar/NavBar'
import Button from '../Elements/Button'

function Section1(props){
    return (
        <div className='principal container-fluid'>
        <NavBar />
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active texto1">
                    <img src="../images/4732a159-6a21-4dbf-ae04-4c283852e101.jpg" className="d-none d-md-block w-100" alt="Imagenes sobre construccion" />
                    <img src="../images/4732a159-movil.jpg" className="d-block w-100 d-md-none" alt="Imagenes sobre construccion" />
                    
                    <div className="carousel-caption">
                        <h5 className='titulo_carousel'>Con creatividad para aportar soluciones inovadoras</h5>
                        <p className='texto_carousel d-none d-md-block'>Los líderes deben alentar que los empleados aprendan de expertos en campos en los que no han trabajado antes. Las prácticas que son rutinarias en una industria pueden ser revolucionarias cuando migran a otra industria, especialmente cuando desafían el conocimiento convencional en esa industria</p>
                        <div className='carousel__button'>
                            <Button symbol={'Leer más'} />
                        </div>
                    </div>

                </div>
                <div className="carousel-item">
                    <img src="..\images\bc69e234-8c6b-431a-ae86-7331a48255b9.jpg" className="d-none d-md-block w-100" alt="Imagenes sobre construccion" />
                    <img src="..\images\bc69e234-movil.jpg" className="d-block w-100 d-md-none" alt="Imagenes sobre construccion" />
                    
                    <div className="carousel-caption">
                        <h5 className='titulo_carousel'>Con trayectoria para aportar soluciones inovadoras</h5>
                        <p className='texto_carousel d-none d-md-block'>Nuestra intención cómo empresa es adaptarnos a cada una de las necesidades de diseño de nuestros clientes, ya que contamos con un equipo de profesionales que ayudarán hacer realidad tu idea y convertirlo en un gran proyecto.</p>
                        <div className='carousel__button'>
                            <Button symbol={'Leer más'} />
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="../images/6ba23cfe-2b00-40ed-b015-7917acef6c1d.jpg" className="d-none d-md-block w-100" alt="Imagenes sobre construccion" />
                    <img src="../images/6ba23cfe-movil.jpg" className="d-block w-100 d-md-none" alt="Imagenes sobre construccion" />
                    
                    <div className="carousel-caption ">
                        <h5 className='titulo_carousel'>Con valores apostando a una vision sustentable </h5>
                        <p className='texto_carousel d-none d-md-block'> Son ideas que abordan las problemáticas del desarrollo sustentable, es decir, que tienen como objetivo la prosperidad económica, la integridad del medio ambiente y la equidad social.</p>
                        <div className='carousel__button'>
                            <Button symbol={'Leer más'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div> 
        
    )
}

export default Section1;
