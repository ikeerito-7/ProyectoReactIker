// Importa React y el hook useState para manejar el estado del componente.
import React, { useState } from 'react';

// Importa los componentes hijos.
import Header from './components/Header';
import FormularioTareas from './components/FormularioTareas';
import ListaTareas from './components/ListaTareas';

// Importa los estilos globales de la aplicación.
import './App.css';

function App() {
  // Estado que guarda las tareas; inicia como un arreglo vacío.
  const [tareas, setTareas] = useState([]);

  // Estado para controlar si se muestran todas las tareas o solo las pendientes.
  const [mostrarCompletadas, setMostrarCompletadas] = useState(true);

  /**
   * Función para agregar una nueva tarea.
   * @param {string} texto - Texto ingresado por el usuario.
   */
  const agregarTarea = (texto) => {
    // Elimina espacios al inicio y final del texto.
    const nombreTarea = texto.trim();

    // Verifica si ya existe una tarea con el mismo nombre (sin distinguir mayúsculas/minúsculas).
    const existe = tareas.some(
      (t) => t.texto.toLowerCase() === nombreTarea.toLowerCase()
    );
    if (existe) {
      // Si ya existe, muestra una alerta y no agrega la tarea.
      alert('Ya existe una tarea con ese nombre');
      return;
    }

    // Si el texto no está vacío, crea la tarea.
    if (nombreTarea !== '') {
      const nuevaTarea = {
        id: Date.now(),      // Crea un id único usando el timestamp actual.
        texto: nombreTarea,  // Asigna el texto de la tarea.
        completada: false,   // La tarea inicia sin estar completada.
      };
      // Actualiza el estado agregando la nueva tarea al arreglo existente.
      setTareas([...tareas, nuevaTarea]);
    }
  };

  /**
   * Función para actualizar el texto de una tarea existente.
   * @param {number} id - Identificador único de la tarea.
   * @param {string} nuevoTexto - Nuevo texto de la tarea.
   */
  const actualizarTarea = (id, nuevoTexto) => {
    // Mapea las tareas, y si el id coincide, actualiza el texto.
    setTareas(
      tareas.map((t) =>
        t.id === id ? { ...t, texto: nuevoTexto } : t
      )
    );
  };

  /**
   * Función para eliminar una tarea.
   * @param {number} id - Identificador único de la tarea a eliminar.
   */
  const eliminarTarea = (id) => {
    // Filtra las tareas y elimina la que tenga el id indicado.
    setTareas(tareas.filter((t) => t.id !== id));
  };

  /**
   * Función para alternar el estado completado de una tarea.
   * @param {number} id - Identificador de la tarea.
   */
  const completarTarea = (id) => {
    // Mapea las tareas y alterna el valor de "completada" para la tarea seleccionada.
    setTareas(
      tareas.map((t) =>
        t.id === id ? { ...t, completada: !t.completada } : t
      )
    );
  };
 
  // Renderiza los componentes principales y pasa las props necesarias.
  return (
    <div className="contenedor">
      {/* Componente Header: controla la visibilidad de tareas completadas */}
      <Header
        mostrarCompletadas={mostrarCompletadas}
        setMostrarCompletadas={setMostrarCompletadas}
      />

      {/* Componente de formulario para agregar nuevas tareas */}
      <FormularioTareas agregarTarea={agregarTarea} />

      {/* Componente que muestra la lista de tareas */}
      <ListaTareas
        tareas={tareas}
        mostrarCompletadas={mostrarCompletadas}
        completarTarea={completarTarea}
        editarTarea={actualizarTarea}  // Se pasa actualizarTarea con el alias editarTarea.
        eliminarTarea={eliminarTarea}
      />
    </div>
  );
}

// Exporta el componente App para que pueda ser utilizado en otros archivos.
export default App;
