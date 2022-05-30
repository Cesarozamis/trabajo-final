import React, { useState } from 'react';
import { Formik } from 'formik';
import axios from 'axios';

const Formulario = () => {
     const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

     return (
          <>
               <Formik
                    initialValues={{
                         name: '',
                         email: '',
                         phone: '',
                         message: ''
                    }}
                    validate={(valores) => {
                         let errores = {};
                         // Validamos el nombre
                         if (!valores.name) {
                              errores.name = 'Por favor ingrese su nombre'
                         } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
                              errores.name = 'Su nombre solo puede contener letras y espacios'
                         }
                         // Validamos el email
                         if (!valores.email) {
                              errores.email = 'Por favor ingrese su email'
                         } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
                              errores.email = 'Su correo electrónico solo puede contener letras, números, guiones, puntos y espacios'
                         }
                         // Validamos el phone
                         if (!valores.phone) {
                              errores.phone = 'Por favor ingrese su teléfono'
                         }
                         // Validamos el mensaje
                         if (!valores.message) {
                              errores.message = 'Por favor ingrese su mensaje'
                         }

                         return errores;
                    }}
                    
                    onSubmit={(valores, {resetForm}) => {
                         resetForm();
                         cambiarFormularioEnviado(false);
                         setTimeout(() => {
                            cambiarFormularioEnviado(true);
                         }, 2000)
                         axios.post('http://laravel.rizomaconstructora.online/public/index.php/api/registroConsulta', valores)
                         .then(function (response) {
                              console.log(response);
                         })
                         .catch(function (error) {
                              console.log(error);
                         });
                         // axios.post('https://servidor/api/saveUsers', valores)*

                         /*let xhr = new XMLHttpRequest();
                    xhr.open("POST", "http://localhost/PinBackend/public/index.php/api/registroConsulta");

                    xhr.setRequestHeader("Accept", "application/json");
                    xhr.setRequestHeader("Content-Type", "application/json");

                    xhr.onload = () => console.log(xhr.responseText);


                    xhr.send(valores);*/
                    }}                  
                    >
                    {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
                         <form onSubmit={handleSubmit} id="formulario" className="formulario_globo__content__form">
                              <div className="formulario_globo__content__form__name">
                                   <label htmlFor="name">Nombre</label>
                                   <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="formulario_globo__content__input"
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required
                                   />
                                   {touched.name && errors.name && <div className='error'>{errors.name}</div>}

                              </div>
                              <div className="formulario_globo__content__form__email">
                                   <label htmlFor="email">Email</label>
                                   <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="formulario_globo__content__input"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required
                                   />
                                   {touched.email && errors.email && <div className='error'>{errors.email}</div>}

                              </div>
                              <div className="formulario_globo__content__form__phone">
                                   <label htmlFor="phone">Teléfono</label>
                                   <input
                                        type="number"
                                        name="phone"
                                        id="phone"
                                        className="formulario_globo__content__input"
                                        value={values.phone}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required
                                   />
                                   {touched.phone && errors.phone && <div className='error'>{errors.phone}</div>}
                              </div>
                              <div className="formulario_globo__content__form__message">
                                   <label htmlFor="message">Mensaje</label>
                                   <textarea
                                        className="formulario_globo__content__textarea"
                                        name="message"
                                        id="message"
                                        value={values.message}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required>    
                                   </textarea>
                                   {touched.message && errors.message && <div className='error'>{errors.message}</div>}
                              </div>
                              <div className="formulario_globo__content__boton">
                                   <button type="submit" className="button_send"> Enviar </button>
                                   {formularioEnviado && <div className='exito_div'><p className='exito'>Gracias por comunicarse, le responderemos a la brevedad</p></div>}
                              </div>
                         </form>
                    )}

               </Formik>

          </>
     )
}

export default Formulario
