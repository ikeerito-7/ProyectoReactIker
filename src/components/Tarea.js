import React, { useState } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import './Tarea.css';

/**
 * Este componente representa una "Tarea" individual.
 * Muestra un checkbox para completarla, un texto (o input para editar),
 * y botones de editar y eliminar.
 *
 * @param {object} props - Recibe las props:
 *   - tarea (objeto con {id, texto, completada})
 *   - editarTarea (función para actualizar el texto de la tarea)
 *   - eliminarTarea (función para borrar la tarea)
 *   - completarTarea (función para marcar la tarea como completada o no)
 */
function Tarea({ tarea, editarTarea, eliminarTarea, completarTarea }) {
  // Estado local "editando" para saber si estamos en modo edición (true/false)
  const [editando, setEditando] = useState(false);

  // Estado local "texto" que se inicializa con el texto de la tarea
  const [texto, setTexto] = useState(tarea.texto);

  /**
   * handleChange se llama cada vez que el usuario escribe en el input de edición.
   * Actualiza el estado "texto" con lo que el usuario está escribiendo.
   *
   * @param {Event} e - Evento onChange del input
   */
  const handleChange = (e) => {
    setTexto(e.target.value);
  };

  /**
   * handleActualizar se llama cuando el usuario hace clic en "Actualizar".
   * Verifica que el texto no esté vacío. Si es válido,
   * llama a la función "editarTarea" que viene por props,
   * pasando el id de la tarea y el nuevo texto.
   * Luego sale del modo edición.
   */
  const handleActualizar = () => {
    if (texto.trim() !== '') {
      editarTarea(tarea.id, texto); 
    }
    setEditando(false);
  };

  return (
    // clase "tarea" + "editando" si editando === true, + "completada" si tarea.completada === true
    <div className={`tarea ${editando ? 'editando' : ''} ${tarea.completada ? 'completada' : ''}`}>
      
      {/* 
        .tarea-contenido es el contenedor que agrupa el checkbox y el texto/input 
      */}
      <div className="tarea-contenido">
        {/* 
          Checkbox que marca o desmarca la tarea como completada. 
          Al cambiar su valor, se llama a completarTarea(tarea.id)
        */}
        <input
          type="checkbox"
          checked={tarea.completada}
          onChange={() => completarTarea(tarea.id)}
        />

        {/*
          Si "editando" es true, mostramos un <input> controlado por el estado "texto".
          Si no, mostramos un <span> con el texto de la tarea.
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

      {/*
        .tarea-botones contiene los botones:
        - Actualizar (solo visible si editando === true)
        - Editar (permite cambiar a modo edición)
        - Eliminar (borra la tarea)
      */}
      <div className="tarea-botones">
        {editando && (
          <button className="actualizar" onClick={handleActualizar}>
            Actualizar
          </button>
        )}

        {/* Botón que activa el modo edición al pulsarlo */}
        <button className="editar" onClick={() => setEditando(true)}>
          <FontAwesomeIcon icon={faPen} />
        </button>

        {/* Botón para eliminar la tarea, llama a la función eliminarTarea */}
        <button className="eliminar" onClick={() => eliminarTarea(tarea.id)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
}

export default Tarea;
