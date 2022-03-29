import React from 'react'
const Section4 = () => {
    return (
        <article className="section4_acordion_container" id="corredor">
                <div className="section4_acordion">
                    <div className="accordion accordion-flush section4_acordion_texto" id="accordionCorredor">
                        <div className="accordion-item">
                            <h4 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed accordion_titulo" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    OBRAS CIVILES
                                </button>
                            </h4>
                            <div id="flush-collapseOne" className="accordion-collapse collapse p-4" aria-labelledby="flush-headingOne"
                                data-bs-parent="#accordionCorredor">
                                <div className="accordion-body accordion_texto">A través de la historia de nuestra compañía, hemos realizado una gran variedad de trabajos, desde Fábricas a Edificios de Viviendas, y en cada proyecto hemos cumplido con las expectativas de nuestros clientes. Consideramos muy importante las lecciones aprendidas, para seguir entregando excelentes resultados en cada uno de los nuevos desafíos
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h4 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed accordion_titulo" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    MONTAJE
                                </button>
                            </h4>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse p-4" aria-labelledby="flush-headingTwo"
                                data-bs-parent="#accordionCorredor">
                                <div className="accordion-body accordion_texto">
                                    <li>Trabajos que realizamos:</li>
        
                                    <li>Conformado de estructuras metálicas, vigas, correas, columnas, rejas, insertos, etc.</li>
        
                                    <li>Arenado de piezas metálicas para su posterior pintado.</li>
                                    <li>Pintado de piezas metálicas con diferentes suministros, según especificación del cliente. (Pinturas Epoxi, esmalte sintético, etc)</li>
        
                                    <li>Carga y transporte propio de las estructuras hacia la obra.</li>
        
                                    <li>Gran depósito de materiales y materias primas.</li>
                                        </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h4 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed accordion_titulo" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    ADMINISTRACIÓN, GESTIÓN Y GERENCIAMIENTO
                                </button>
                            </h4>
                            <div id="flush-collapseThree" className="accordion-collapse collapse p-4" aria-labelledby="flush-headingThree"
                                data-bs-parent="#accordionCorredor">
                                <div className="accordion-body accordion_texto">Incluye la realización de un plan de calidad, planes de trabajo, análisis de costos, administración, gestión de recursos, seguimiento y evaluación de resultados.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </article>
    )
}

export default Section4
