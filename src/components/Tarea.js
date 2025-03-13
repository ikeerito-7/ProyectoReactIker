import React, { useState } from 'react';
import './Tarea.css';

function Tarea({ tarea, actualizarTarea, eliminarTarea, completarTarea }) {
  const [editando, setEditando] = useState(false);
  const [nuevoTexto, setNuevoTexto] = useState(tarea.texto);

  return (
    <div className={`tarea ${tarea.completada ? 'completada' : ''}`}>
      <input type="checkbox" checked={tarea.completada} onChange={() => completarTarea(tarea.id)} />
      {editando ? (
        <input type="text" value={nuevoTexto} onChange={(e) => setNuevoTexto(e.target.value)} />
      ) : (
        <span>{tarea.texto}</span>
      )}
      {editando ? (
        <button className="actualizar" onClick={() => { actualizarTarea(tarea.id, nuevoTexto); setEditando(false); }}>Actualizar</button>
      ) : (
        <button className="editar" onClick={() => setEditando(true)}>✏️</button>
      )}
      <button className="eliminar" onClick={() => eliminarTarea(tarea.id)}>❌</button>
    </div>
  );
}

export default Tarea;