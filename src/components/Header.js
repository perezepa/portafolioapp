import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {
  return (
    <Fragment>
      {/* <h1>Desde el header</h1> */}
      <div className="header">
        <div className="nombre"><strong>Edys</strong> Perez</div>
        <div className="menuheader">
          <Link to={'/'} className="inicio">
            Inicio
          </Link>
          <Link to="/Pagecontacto" className="contacto">
            Contacto
          </Link>
        </div>
      </div>
    </Fragment>
  );
}
 
export default Header;