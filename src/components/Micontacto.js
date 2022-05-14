import React, { Fragment, useState } from 'react';
import emailjs from 'emailjs-com'

//import { uuid } from 'uuidv4';
import '../App.css';

// Importar Componentes
import Error from './Error';

const Micontacto = () => {

  // Crear State de Citas
  const [enviar, actualizarEnviar] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  });

  const [ error, actualizarError ] = useState(false)
  const [ messag, guardarMessag] = useState('');

  // Funcion que se ejecuta cada vez que el usuario escribe en un input
  const actualizarState = e => {
    actualizarEnviar({
      ...enviar,
      [e.target.name]: e.target.value
    })
  }

  // Extraer los Valores
  const { nombre, correo, mensaje } = enviar;

  // Cuando el usuario presiona enviar correo
  const submitEnviar = e => {
    e.preventDefault();

    // Validar
    /* if(nombre.trim() === '' || correo.trim() === '' || mensaje.trim() === '' ){
      actualizarError(true);
      setTimeout(() => {
        actualizarError(false);
      }, 6000);
      return;
    } */

    if(nombre.trim() === '' || nombre.trim().length <= 2){
      actualizarError(true);
      guardarMessag('Todos los Campos son Obligatorios');
      setTimeout(() => {
        actualizarError(false);
      }, 6000);
      return;
    }

    if(correo.trim() === ''){
      actualizarError(true);
      guardarMessag('Todos los Campos son Obligatorios');
      setTimeout(() => {
        actualizarError(false);
      }, 6000);
      return;
    } else if (correo.indexOf("@") === -1) {
      actualizarError(true);
      guardarMessag('El campo correo debe contener @ ');
      setTimeout(() => {
        actualizarError(false);
      }, 6000);
        return;
    }

    if(mensaje.trim() === '' || mensaje.trim().length <= 2){
      actualizarError(true);
      guardarMessag('Todos los Campos son Obligatorios');
      setTimeout(() => {
        actualizarError(false);
      }, 6000);
      return;
    }

    // Eliminar el mensaje previo
    actualizarError(false);

    // Asignar un ID
    //enviar.id = uuid();

    // Crear la Cita
    //crearCorreo(enviar);

    // Enviar Correo
    emailjs.sendForm("service_2u3dk4l", "template_xof10ut", e.target, "oQ8bMbAkrVDB-ECKI").then(
      res=>{
        alert("Correo enviado correctamente.");
        console.log(res)
        return res.status;
      }
    )

    // Reiniciar el Formulario
    actualizarEnviar({
        nombre: '',
        correo: '',
        mensaje: ''
    })

  }

  return (
    <Fragment>
      <div className="micontacto">
        <div className="micontacto_conten">
          <span>Quedando a tus Ordenes: </span>
          <p>Esperando que mi perfil se ajuste a las necesidades actuales de tus proyectos, 
            para lo cual estoy en la mejor disposición de dar mi mejor esfuerzo! Para aprender, 
            aportar valor y que tengamos una fructifera relacion a largo plazo.
          </p>
        </div>
        <div className="micontacto_form">
          <form 
            className="mi_form"
            onSubmit={submitEnviar}
          >
            <input 
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Nombre"
              onChange={actualizarState}
              value={nombre}
            />
            <input 
              type="text"
              name="correo"
              id="correo"
              placeholder="Correo"
              onChange={actualizarState}
              value={correo}
            />
            <textarea
              type="text"
              name="mensaje" 
              id="mensaje" 
              placeholder="Mensaje" 
              onChange={actualizarState}
              value={mensaje}
              cols="30" 
              rows="5"
            ></textarea>
            <button 
              type="submit"
              className="btn_form"
            >Enviar</button>
            { error && <Error mensaje={messag} /> }
            {/* { error ? <p className="class_error">Todos los campos son obligatorios</p> : null } */}
            </form>
          </div>
      </div>
    </Fragment>
  );
}

export default Micontacto;