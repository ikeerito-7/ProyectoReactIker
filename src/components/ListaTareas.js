import React from 'react';
import Tarea from './Tarea';
import './ListaTareas.css';

function ListaTareas({
  tareas,
  mostrarCompletadas,
  completarTarea,
  editarTarea,       // <-- Recibimos la prop "editarTarea"
  eliminarTarea
}) {
  // Filtra las tareas según si queremos o no mostrar completadas
  const tareasFiltradas = tareas.filter((tarea) =>
    mostrarCompletadas ? true : !tarea.completada
  );

  if (tareasFiltradas.length === 0) {
    return (
      <div className="lista-tareas no-tareas">
        ¡No hay tareas! Añade una tarea arriba.
      </div>
    );
  }

  return (
    <div className="lista-tareas">
      {tareasFiltradas.map((tarea) => (
        <Tarea
          key={tarea.id}
          tarea={tarea}
          completarTarea={completarTarea}
          editarTarea={editarTarea}     
          eliminarTarea={eliminarTarea}
        />
      ))}
    </div>
  );
}

export default ListaTareas;
