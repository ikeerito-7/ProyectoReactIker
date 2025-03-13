import React from 'react';
import Tarea from './Tarea'; // Importa el componente Tarea para renderizar cada tarea individual
import './ListaTareas.css'; // Importa los estilos específicos para la lista de tareas

/**
 * Componente ListaTareas
 * Se encarga de mostrar la lista de tareas filtradas según si se quieren ver las completadas o no.
 *
 * Props:
 * - tareas: Array de objetos de tarea (cada objeto tiene id, texto y completada)
 * - mostrarCompletadas: Booleano que indica si se deben mostrar todas las tareas o solo las pendientes.
 * - completarTarea: Función para alternar el estado completado de una tarea.
 * - editarTarea: Función para actualizar el texto de una tarea.
 * - eliminarTarea: Función para borrar una tarea.
 */
function ListaTareas({
  tareas,
  mostrarCompletadas,
  completarTarea,
  editarTarea,       // Recibimos la prop "editarTarea"
  eliminarTarea
}) {
  // Filtramos las tareas:
  // Si mostrarCompletadas es true, se muestran todas las tareas.
  // Si es false, solo se muestran las tareas que NO están completadas.
  const tareasFiltradas = tareas.filter((tarea) =>
    mostrarCompletadas ? true : !tarea.completada
  );

  // Si no hay tareas después del filtrado, mostramos un mensaje indicativo
  if (tareasFiltradas.length === 0) {
    return (
      <div className="lista-tareas no-tareas">
        ¡No hay tareas! Añade una tarea arriba.
      </div>
    );
  }

  // Si hay tareas, las renderizamos dentro de un contenedor con la clase "lista-tareas"
  return (
    <div className="lista-tareas">
      {tareasFiltradas.map((tarea) => (
        <Tarea
          key={tarea.id} // Cada tarea debe tener una key única para ayudar a React con la renderización
          tarea={tarea} // Pasamos la tarea completa para que el componente Tarea muestre su información
          completarTarea={completarTarea} // Función para marcar/desmarcar la tarea como completada
          editarTarea={editarTarea}       // Función para actualizar el texto de la tarea
          eliminarTarea={eliminarTarea}   // Función para eliminar la tarea
        />
      ))}
    </div>
  );
}

export default ListaTareas;
