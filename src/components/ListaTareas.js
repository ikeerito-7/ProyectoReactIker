// Importa React para poder usar JSX.
import React from 'react';

// Importa el componente Tarea, que representa cada tarea individual.
import Tarea from './Tarea';

// Importa los estilos específicos para la lista de tareas.
import './ListaTareas.css';

/**
 * Componente ListaTareas
 * Muestra las tareas filtradas y se encarga de renderizar cada una de ellas.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {Array} props.tareas - Array de objetos tarea (cada uno con id, texto y completada).
 * @param {boolean} props.mostrarCompletadas - Indica si se deben mostrar las tareas completadas.
 * @param {function} props.completarTarea - Función para marcar/desmarcar una tarea como completada.
 * @param {function} props.editarTarea - Función para actualizar el texto de una tarea.
 * @param {function} props.eliminarTarea - Función para eliminar una tarea.
 */
function ListaTareas({
  tareas,
  mostrarCompletadas,
  completarTarea,
  editarTarea,
  eliminarTarea
}) {
  // Filtra las tareas:
  // Si mostrarCompletadas es true, se muestran todas; si es false, solo las pendientes.
  const tareasFiltradas = tareas.filter((tarea) =>
    mostrarCompletadas ? true : !tarea.completada
  );

  // Si no hay tareas que mostrar, renderiza un mensaje.
  if (tareasFiltradas.length === 0) {
    return (
      <div className="lista-tareas no-tareas">
        ¡No hay tareas! Añade una tarea arriba.
      </div>
    );
  }

  // Renderiza cada tarea usando el componente Tarea.
  return (
    <div className="lista-tareas">
      {tareasFiltradas.map((tarea) => (
        <Tarea
          key={tarea.id}               // Cada tarea necesita una key única para optimizar la renderización.
          tarea={tarea}                // Pasa la información completa de la tarea.
          completarTarea={completarTarea} // Función para alternar el estado completado.
          editarTarea={editarTarea}       // Función para editar la tarea.
          eliminarTarea={eliminarTarea}   // Función para eliminar la tarea.
        />
      ))}
    </div>
  );
}

// Exporta el componente para su uso en otros archivos.
export default ListaTareas;
