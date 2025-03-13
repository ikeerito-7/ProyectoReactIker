import React from 'react'; // Importamos React para poder usar JSX
import './Header.css'; // Importamos los estilos específicos para este componente
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importamos el componente para mostrar iconos
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; // Importamos dos iconos: un ojo abierto y un ojo tachado

/**
 * Componente Header
 * Muestra el título "Lista de Tareas" y un botón que permite alternar
 * entre mostrar y no mostrar las tareas completadas.
 *
 * Props:
 * - mostrarCompletadas: booleano que indica si se están mostrando las tareas completadas
 * - setMostrarCompletadas: función para actualizar el estado de "mostrarCompletadas"
 */
function Header({ mostrarCompletadas, setMostrarCompletadas }) {
  /**
   * handleClick:
   * Función que se ejecuta al hacer clic en el botón.
   * Invierte el valor de "mostrarCompletadas" para alternar la vista.
   */
  const handleClick = () => {
    setMostrarCompletadas(!mostrarCompletadas);
  };

  return (
    <div className="header">
      {/* Título principal del Header */}
      <h1>Lista de Tareas</h1>
      
      {/* Botón para alternar la visibilidad de las tareas completadas */}
      <button onClick={handleClick} className="boton-filtro">
        {mostrarCompletadas ? (
          // Si mostrarCompletadas es true, se muestra "No mostrar completadas"
          // y el icono de "ojo tachado" para indicar que se ocultarán las completadas
          <>
            No mostrar completadas
            <FontAwesomeIcon icon={faEyeSlash} className="icono-ojo" />
          </>
        ) : (
          // Si mostrarCompletadas es false, se muestra "Mostrar completadas"
          // y el icono de "ojo" para indicar que se mostrarán las completadas
          <>
            Mostrar completadas
            <FontAwesomeIcon icon={faEye} className="icono-ojo" />
          </>
        )}
      </button>
    </div>
  );
}

export default Header; // Exportamos el componente para usarlo en otros archivos
