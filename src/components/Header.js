import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Header({ mostrarCompletadas, setMostrarCompletadas }) {
  const handleClick = () => {
    setMostrarCompletadas(!mostrarCompletadas);
  };

  return (
    <div className="header">
      <h1>Lista de Tareas</h1>
      <button onClick={handleClick} className="boton-filtro">
        {mostrarCompletadas ? (
          <>
            No mostrar completadas
            <FontAwesomeIcon icon={faEyeSlash} className="icono-ojo" />
          </>
        ) : (
          <>
            Mostrar completadas
            <FontAwesomeIcon icon={faEye} className="icono-ojo" />
          </>
        )}
      </button>
    </div>
  );
}

export default Header;
