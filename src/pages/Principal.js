import React, { Fragment } from 'react';
import '../App.css';

/* Importar Componentes */
import Header from '../components/Header';
import Quiensoy from '../components/Quiensoy';
import Mitalento from '../components/Mitalento';
import Misproyectos from '../components/Misproyectos';
import Micontacto from '../components/Micontacto';
import Footer from '../components/Footer';

const Principal = () => {
    return ( 
      <Fragment>
            <div className="container">
              <Header />
              <Quiensoy />
              <Mitalento />
              <Misproyectos />
              <Micontacto />
              <div className="clearfix"></div>
              <Footer />
            </div>
      </Fragment>
     );
}
 
export default Principal;