import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


const Mitalento = () => {
  return ( 
    <Fragment>
      <div className="mitalento">
        <div className="mitalento_conten">
          <span>Desarrollo de aplicaciones y sitios web</span>
          <p>
            Constantemente me encuentro aprendiendo y desarrollando aplicaciones para mantenerme actualizado, optimizar el 
            domino de herramientas, metodologias y tecnologías como Node JS, JavaScript, React JS, CSS, Bases de Datos, Github y Scrum. 
            Me destaco en el deasrrollo de Aplicaciones FrontEnd con conocimientos y practicas de Backend con Node JS y Python. 
          </p>
        </div>
        <div className="mitalento_link">
          <p>Esta web la construi desde cero con React JS, CSS y una libreria de JavaScript (emailjs-com) para servicios de correo electrónico.
          <br/>En este portafolio igualmente mostrare mis proyectos realizados en CSS, Node JS, Javascript, React JS y Python.
          <br/><br/><strong>Para contactarme!</strong><br/>
            puedes enviarme un correo por este<Link to="/Pagecontacto"><strong> link. </strong></Link>
          </p>
        </div>
      </div>
    </Fragment>
  );
}
 
export default Mitalento;