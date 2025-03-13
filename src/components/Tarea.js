import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import './Tarea.css';

function Tarea({ tarea, actualizarTarea, eliminarTarea, completarTarea }) {
  const [editando, setEditando] = useState(false);
  const [texto, setTexto] = useState(tarea.texto);

  const handleActualizar = () => {
    actualizarTarea(tarea.id, texto);
    setEditando(false);
  };

  const handleInput = (e) => {
    // Cada vez que el usuario escribe, actualizamos el estado con el texto del span
    setTexto(e.currentTarget.textContent);
  };

  return (
    <div className={`tarea ${editando ? 'editando' : ''} ${tarea.completada ? 'completada' : ''}`}>
      <div className="tarea-contenido">

        <input
          type="checkbox"
          checked={tarea.completada}
          onChange={() => completarTarea(tarea.id)}
        />


        <span
          className="texto-tarea"
          contentEditable={editando}
          suppressContentEditableWarning
          onInput={handleInput}
        >
          {texto}
        </span>
      </div>

      <div className="tarea-botones">
        {/* Botón Actualizar solo aparece en modo edición */}
        {editando && (
          <button className="actualizar" onClick={handleActualizar}>
            Actualizar
          </button>
        )}

        {/* Botón de editar: activa el modo edición */}
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
