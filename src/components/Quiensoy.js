import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

// Importar Imagenes
import img1 from '../img/miimagen.png';

const Quiensoy = () => {
  return ( 
    <Fragment>
      <div className="quiensoy">
        <div className="quiensoy_box">
          <div className="micontenido">
            <h1>Desarrollador de Aplicaciones Web</h1>
            <h2>Edys Perez</h2>
            <p>Desarrollador Web: React JS | Node JS | HTML | CSS | SQL | NO-SQL | Scrum | T&D | Symantec
              <br/><strong>Profesional</strong> en la rama de Ingeniería con más de 3 años de trayectoria profesional en el Desarrollo de Aplicaciones 
              Web y manejo de bases de datos (SQL Server, mongodb), en todas las fases del ciclo de vida de desarrollo de software 
              (análisis, diseño, desarrollo, prueba y mantenimiento), administración y soporte.
            </p>
          </div>
          <div className="btn_contactame">
            <Link to="/Pagecontacto">Mi Contacto</Link>
          </div>
        </div>
        <div className="miimagen">
          <img src={img1} alt="sitioweb" />
        </div>
      </div>
    </Fragment>
  );
}
 
export default Quiensoy;