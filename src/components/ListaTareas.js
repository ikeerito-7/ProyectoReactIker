// Importa React y el componente Tarea para renderizar cada tarea.
import React from 'react';
import Tarea from './Tarea';
import './ListaTareas.css';

/**
 * Componente ListaTareas
 * - Filtra las tareas según se desee ver todas o solo las pendientes.
 * - Renderiza cada tarea a través del componente Tarea.
 */
function ListaTareas({
  tareas,
  mostrarCompletadas,
  completarTarea,
  editarTarea,
  eliminarTarea
}) {
  // Filtra las tareas en función del estado "mostrarCompletadas".
  const tareasFiltradas = tareas.filter((tarea) =>
    mostrarCompletadas ? true : !tarea.completada
  );

  // Si no hay tareas tras el filtrado, muestra un mensaje indicativo.
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
      // Por cada tarea en el array filtrado "tareasFiltradas", se renderiza un componente Tarea.
      // Se asigna una "key" única basada en el id de la tarea para ayudar a React a identificar cada elemento.
      // Se pasan como props:
      // - "tarea": el objeto completo de la tarea.
      // - "completarTarea": función para alternar el estado de completada de la tarea.
      // - "editarTarea": función para actualizar el texto de la tarea.
      // - "eliminarTarea": función para borrar la tarea.
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
