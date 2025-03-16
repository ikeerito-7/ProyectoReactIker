// Importa React y el hook useState para manejar estados locales.
import React, { useState } from 'react';

// Importa el componente para mostrar iconos y los iconos que se usarán.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

// Importa los estilos específicos para la tarea.
import './Tarea.css';

/**
 * Componente Tarea
 * Representa una tarea individual con opciones para completar, editar y eliminar.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {Object} props.tarea - Objeto con {id, texto, completada}.
 * @param {function} props.editarTarea - Función para actualizar el texto de la tarea.
 * @param {function} props.eliminarTarea - Función para eliminar la tarea.
 * @param {function} props.completarTarea - Función para marcar o desmarcar la tarea como completada.
 */
function Tarea({ tarea, editarTarea, eliminarTarea, completarTarea }) {
  // Estado local para controlar si la tarea está en modo edición.
  const [editando, setEditando] = useState(false);
  // Estado local para almacenar el texto de la tarea (utilizado en modo edición).
  const [texto, setTexto] = useState(tarea.texto);

  /**
   * handleChange:
   * Se ejecuta cada vez que el usuario escribe en el input de edición.
   * Actualiza el estado "texto" con el valor ingresado.
   * @param {Event} e - Evento onChange del input.
   */
  const handleChange = (e) => {
    setTexto(e.target.value);
  };

  /**
   * handleActualizar:
   * Se ejecuta cuando el usuario desea actualizar el texto de la tarea.
   * Verifica que el texto no esté vacío, llama a la función editarTarea y sale del modo edición.
   */
  const handleActualizar = () => {
    if (texto.trim() !== '') {
      editarTarea(tarea.id, texto);
    }
    setEditando(false);
  };

  return (
    // Aplica clases condicionales:
    // - "editando" si la tarea está en modo edición.
    // - "completada" si la tarea está marcada como completada.
    <div className={`tarea ${editando ? 'editando' : ''} ${tarea.completada ? 'completada' : ''}`}>
      
      {/* Contenedor para el checkbox y el texto o input de edición */}
      <div className="tarea-contenido">
        {/* Checkbox para marcar o desmarcar la tarea como completada */}
        <input
          type="checkbox"
          checked={tarea.completada}
          onChange={() => completarTarea(tarea.id)}
        />

        {/*
          Si estamos en modo edición, muestra un input controlado.
          Si no, muestra el texto de la tarea en un <span>.
        */}
        {editando ? (
          <input
            type="text"
            value={texto}
            onChange={handleChange}
            className="texto-input"
          />
        ) : (
          <span className="texto-tarea">
            {texto}
          </span>
        )}
      </div>

      {/* Contenedor para los botones de acciones */}
      <div className="tarea-botones">
        {editando && (
          // Muestra el botón "Actualizar" solo en modo edición.
          <button className="actualizar" onClick={handleActualizar}>
            Actualizar
          </button>
        )}

        {/* Botón para activar el modo edición */}
        <button className="editar" onClick={() => setEditando(true)}>
          <FontAwesomeIcon icon={faPen} />
        </button>

        {/* Botón para eliminar la tarea */}
        <button className="eliminar" onClick={() => eliminarTarea(tarea.id)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
}

// Exporta el componente.
export default Tarea;
