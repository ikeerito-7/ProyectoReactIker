// Importa React y el hook useState para manejar el estado local.
import React, { useState } from 'react';

// Importa los estilos específicos para este formulario.
import './FormularioTareas.css';

/**
 * Componente FormularioTareas
 * Permite al usuario escribir y agregar una nueva tarea.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {function} props.agregarTarea - Función para agregar una nueva tarea.
 */
function FormularioTareas({ agregarTarea }) {
  // Estado local para almacenar el texto del input.
  const [texto, setTexto] = useState('');

  /**
   * manejarEnvio:
   * Previene el comportamiento por defecto del formulario y, si el texto no está vacío,
   * llama a la función agregarTarea y luego limpia el campo.
   * @param {Event} e - Evento submit del formulario.
   */
  const manejarEnvio = (e) => {
    e.preventDefault(); // Evita que se recargue la página.
    if (texto.trim() !== '') {
      agregarTarea(texto); // Agrega la tarea.
      setTexto('');        // Limpia el input.
    }
  };

  return (
    <form onSubmit={manejarEnvio} className="formulario">
      <div className="input-wrapper">
        {/* Campo de texto controlado por el estado "texto" */}
        <input 
          type="text" 
          value={texto} 
          onChange={(e) => setTexto(e.target.value)} 
          placeholder="Escribe una tarea" 
        />
      </div>
      {/* Botón para enviar el formulario */}
      <button type="submit">+</button>
    </form>
  );
}

// Exporta el componente.
export default FormularioTareas;
