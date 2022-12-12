import 'bootstrap/dist/css/bootstrap.min.css'

import '@popperjs/core/dist/cjs/popper.js'

import 'bootstrap/dist/js/bootstrap.min.js'

import 'bootstrap-icons/font/bootstrap-icons.css' 

import Menu from './componentes/Menu'

import Home from './componentes/Home'

import Sobre from './componentes/Sobre'

import {BrowserRouter as Router, Routes , Route } from 'react-router-dom'

import React from 'react';

import Clinica from './componentes/telas/clinica/Clinica'

import Medico from './componentes/telas/medico/Medico'

function App() {

  return (

    <Router>

        <Menu/>

        <Routes>

          <Route exact path="/" element={<Home/>}/>

          <Route exact path="/sobre" element={<Sobre/>}/>

          <Route exact path="/clinicas" element={<Clinica/>}/>

          <Route exact path="/medicos" element={<Medico/>}/>

        </Routes>

    </Router>

  );

}

export default App;