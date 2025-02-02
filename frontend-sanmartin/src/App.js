import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Bienvenido from './pages/Bienvenido.js'; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/bienvenido" element={<Bienvenido />} /> {/* Ruta para la página de bienvenida */}
    </Routes>
  );
}

export default App;
