import React, { Fragment } from 'react';
import '../App.css';

/* Importar Componentes */
import Header from '../components/Header';
import Micontacto from '../components/Micontacto';
import Footer from '../components/Footer';

const Pagecontacto = () => {
  return ( 
    <Fragment>
      <div className="container">
        <Header />
        <Micontacto />
        <div className="clearfix"></div>
        <Footer />
      </div>
    </Fragment>
     );
}
 
export default Pagecontacto;