import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import TelaInicial from './pages/tela-inicial.js';
import Home from './pages/home.js'
import Cadastro from './pages/tela-cadastro.js'
import Login from './pages/tela-login.js'
import TelaPerfil from './pages/tela-perfil'
import Apoiador from './pages/tela-apoiador';
import About from './pages/tela-sobre.js'
import TelaAgendamento from './pages/tela-agendamento'
import Colaboradores from './pages/tela-colaboradores';


class App extends Component {
  render() {
    return (

      <div className="App">
        <Routes>
          <Route exact path='/' element={<TelaInicial />} />
          <Route path='/home' element={<Home />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/login' element={<Login />} />
          <Route path='/perfil'element={<TelaPerfil />} />
          <Route path='/apoio' element={<Apoiador />} />
          <Route path='/sobre' element={<About />} />
          <Route path='/agendamento' element={<TelaAgendamento />} />
          <Route path='/colaboradores' element={<Colaboradores />} />
        </Routes>
      </div>
    );
  }
}

export default App;