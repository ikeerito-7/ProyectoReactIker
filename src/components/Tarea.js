import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import './Tarea.css';

function Tarea({ tarea, editarTarea, eliminarTarea, completarTarea }) {
  const [editando, setEditando] = useState(false);
  const [texto, setTexto] = useState(tarea.texto);

  // Cada vez que se escribe en el input, actualizamos el estado 'texto'
  const handleChange = (e) => {
    setTexto(e.target.value);
  };

  // Guardamos los cambios y cerramos modo edición
  const handleActualizar = () => {
    if (texto.trim() !== '') {
      editarTarea(tarea.id, texto); // <--- Llamamos a 'editarTarea', no 'actualizarTarea'
    }
    setEditando(false);
  };

  return (
    <div className={`tarea ${editando ? 'editando' : ''} ${tarea.completada ? 'completada' : ''}`}>
      
      <div className="tarea-contenido">
        <input
          type="checkbox"
          checked={tarea.completada}
          onChange={() => completarTarea(tarea.id)}
        />

        {/* Modo edición vs no edición */}
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

      <div className="tarea-botones">
        {editando && (
          <button className="actualizar" onClick={handleActualizar}>
            Actualizar
          </button>
        )}

        <button className="editar" onClick={() => setEditando(true)}>
          <FontAwesomeIcon icon={faPen} />
        </button>

        <button className="eliminar" onClick={() => eliminarTarea(tarea.id)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
}

export default Tarea;
