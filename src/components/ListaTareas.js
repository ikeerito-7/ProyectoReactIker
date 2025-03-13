import React from 'react';
import Tarea from './Tarea';
import './ListaTareas.css';

function ListaTareas({ tareas, mostrarCompletadas, actualizarTarea, eliminarTarea, completarTarea }) {
  return (
    <div className="lista-tareas">
      {tareas.filter(t => mostrarCompletadas || !t.completada).map(t => (
        <Tarea key={t.id} tarea={t} actualizarTarea={actualizarTarea} eliminarTarea={eliminarTarea} completarTarea={completarTarea} />
      ))}
    </div>
  );
}

export default ListaTareas;