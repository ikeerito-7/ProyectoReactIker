// Importa React para poder usar JSX.
import React from 'react';
// Importa estilos específicos para este componente.
import './Header.css';
// Importa FontAwesome para utilizar iconos.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

/**
 * Componente Header
 * - Muestra el título "Lista de Tareas".
 * - Permite alternar la visibilidad de las tareas completadas.
 */
function Header({ mostrarCompletadas, setMostrarCompletadas }) {
  // Función para invertir el valor del estado "mostrarCompletadas".
  const handleClick = () => {
    setMostrarCompletadas(!mostrarCompletadas);
  };

  return (
  <div className="header">
    {/* Título de la sección que muestra "Lista de Tareas" */}
    <h1>Lista de Tareas</h1>

    {/* Botón que, al hacer clic, ejecuta la función "handleClick" para alternar la visualización de tareas completadas */}
    <button onClick={handleClick} className="boton-filtro">
        {mostrarCompletadas ? (
        <>
          {/* Si "mostrarCompletadas" es true, se muestra el texto "No mostrar completadas" y un ícono de ojo tachado */}
          No mostrar completadas
          <FontAwesomeIcon icon={faEyeSlash} className="icono-ojo" />
        </>
      ) : (
        <>
          {/* Si "mostrarCompletadas" es false, se muestra el texto "Mostrar completadas" y un ícono de ojo */}
          Mostrar completadas
          <FontAwesomeIcon icon={faEye} className="icono-ojo" />
        </>
      )}
  </button>
</div>

  );
}

export default Header;
