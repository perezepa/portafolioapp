import React, { Fragment } from 'react';
import '../App.css';

const Misproyectos = () => {

    const consultarAPI = (url) => {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
    }
    
    return ( 
      <Fragment>
        <div className="misproyectos">
          <div className="misproyectos_conten">
            <p><span>Para mayor detalle</span> comparto proyectos que he construido</p>
          </div>
          <div className="misproyectos_grid">
            <div className="box_grid">
              <p><strong>Pagina Web Estatica</strong><br/>
                Proyecto Agenda Telefonica con HTML y CSS. Esta aplicación permite mostrar mis practicas personales de maquetación web; 
                Se encuentra alojada en mi repositorio de GitHub y el despliegue se realizó con Git Pages.
                {/* <Link to= {() => window.location.href} className="contacto">link aqui.</Link> */}
              </p>{/* <button onClick= {() => consultarAPI()} className="btn_proyecto">Ver proyecto</button> */}
              <button onClick= {() => consultarAPI('https://perezepa.github.io/agendamaqapp/')} className="btn_proyecto">Ver proyecto</button>
            </div>
            <div className="box_grid">
              <p><strong>Proyecto React</strong><br/>
                Proyecto de practica personal desarrollado con React JS, CSS y desplegado con Netlify.
                Esta aplicación permite realizar una operación para el calculo de volumen de hoyo.
              </p>
              <button onClick= {() => consultarAPI('https://volumenhoyoreact.netlify.app/')} className="btn_proyecto">Ver proyecto</button>
            </div>
            <div className="box_grid">
              <p><strong>Proyecto React</strong><br/>
                Proyecto de practica personal desarrollado con React JS y CSS. 
                Se encuentra alojada en mi repositorio de GitHub y el despliegue se realizó con Netlify.
                Esta aplicación permite mostrar frases religiosas.
              </p>
              <button onClick= {() => consultarAPI('https://frases-biblicas.netlify.app/')} className="btn_proyecto">Ver proyecto</button>
            </div>
            <div className="box_grid">
              <p><strong>Proyecto React</strong><br/>
                Proyecto de practica personal desarrollado con React JS y CSS. 
                Se encuentra alojada en mi repositorio de GitHub y el despliegue se realizó con Netlify.
                Esta aplicación permite llevar una Gestion de Pozos.
              </p>
              <button onClick= {() => consultarAPI('https://gestion-pozos.netlify.app/')} className="btn_proyecto">Ver proyecto</button>
            </div>
          </div>
        </div>
      </Fragment>
     );
}
 
export default Misproyectos;