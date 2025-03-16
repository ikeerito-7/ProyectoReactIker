// Importa React y useState para gestionar estados locales.
import React, { useState } from 'react';
// Importa FontAwesome para utilizar íconos en los botones.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import './Tarea.css';

/**
 * Componente Tarea
 * - Representa una tarea individual y permite editar, actualizar, marcar como completada o eliminar la tarea.
 */
function Tarea({ tarea, editarTarea, eliminarTarea, completarTarea }) {
  // Estado local que indica si la tarea está en modo edición.
  const [editando, setEditando] = useState(false);
  // Estado local para almacenar el texto de la tarea en modo edición.
  const [texto, setTexto] = useState(tarea.texto);

  /**
   * handleChange:
   * - Actualiza el estado "texto" cada vez que el usuario escribe en el input de edición.
   */
  const handleChange = (e) => {
    setTexto(e.target.value);
  };

  /**
   * handleActualizar:
   * - Valida el texto y, si es correcto, llama a editarTarea para actualizar el contenido de la tarea.
   * - Sale del modo edición.
   */
  const handleActualizar = () => {
    if (texto.trim() !== '') {
      editarTarea(tarea.id, texto);
    }
    setEditando(false);
  };

  return (
    // Aplica clases condicionales según si se está en modo edición o si la tarea está completada.
    <div className={`tarea ${editando ? 'editando' : ''} ${tarea.completada ? 'completada' : ''}`}>
      <div className="tarea-contenido">
        {/* Checkbox para alternar el estado "completada" de la tarea */}
        <input
          type="checkbox"
          checked={tarea.completada}
          onChange={() => completarTarea(tarea.id)}
        />
        {editando ? (
          // Si la tarea está en modo edición, se muestra un input controlado.
          <input
            type="text"
            value={texto}
            onChange={handleChange}
            className="texto-input"
          />
        ) : (
          // Si no, se muestra el texto de la tarea en un span.
          <span className="texto-tarea">
            {texto}
          </span>
        )}
      </div>
      <div className="tarea-botones">
        {editando && (
          // Botón "Actualizar", visible solo en modo edición.
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

export default Tarea;
