import React from 'react';
import './Header.css';

function Header({ mostrarCompletadas, setMostrarCompletadas }) {
  return (
    <div className="header">
      <h1>Lista de Tareas</h1>
      <button onClick={() => setMostrarCompletadas(!mostrarCompletadas)}>
        {mostrarCompletadas ? 'No mostrar completadas' : 'Mostrar todas'}
      </button>
    </div>
  );
}

export default Header;