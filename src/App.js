import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* Importar Componentes */
import Principal from './pages/Principal';
import Pagecontacto from './pages/Pagecontacto';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Principal/>} />
        <Route path='/Pagecontacto' element={<Pagecontacto/>} />
      </Routes>
    </Router>
  );
}

export default App;
