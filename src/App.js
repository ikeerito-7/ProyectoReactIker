import React, { useState } from 'react'; 
// Importamos React y el hook useState para manejar el estado local en el componente.

import Header from './components/Header';
// Importamos el componente Header, que se encarga de mostrar el encabezado y controlar la visibilidad de tareas completadas.

import FormularioTareas from './components/FormularioTareas';
// Importamos el componente FormularioTareas, que permite al usuario añadir nuevas tareas.

import ListaTareas from './components/ListaTareas';
// Importamos el componente ListaTareas, que muestra la lista de tareas existentes.

import './App.css';
// Importamos los estilos globales de la aplicación.

function App() {
  // Declaramos el estado "tareas", que es un array vacío inicialmente.
  const [tareas, setTareas] = useState([]);

  // Declaramos el estado "mostrarCompletadas", que es un booleano para determinar si se muestran todas las tareas o solo las pendientes. Inicialmente es true.
  const [mostrarCompletadas, setMostrarCompletadas] = useState(true);

  // Función para agregar una tarea nueva.
  // Recibe el texto que el usuario ingresa en el formulario.
  const agregarTarea = (texto) => {
    // Se limpia el texto (elimina espacios al inicio y al final).
    const nombreTarea = texto.trim();

    // Verifica si ya existe una tarea con ese nombre (compara en minúsculas para evitar diferencias de mayúsculas/minúsculas).
    const existe = tareas.some(
      (t) => t.texto.toLowerCase() === nombreTarea.toLowerCase()
    );
    if (existe) {
      // Si existe, muestra una alerta nativa y sale de la función sin agregar la tarea.
      alert('Ya existe una tarea con ese nombre');
      return;
    }

    // Si el nombre no está vacío, se crea la nueva tarea.
    if (nombreTarea !== '') {
      const nuevaTarea = {
        id: Date.now(),         // Se asigna un ID único usando el timestamp actual.
        texto: nombreTarea,     // Se asigna el texto de la tarea.
        completada: false,      // La tarea inicia sin estar completada.
      };
      // Se agrega la nueva tarea al array existente de tareas.
      setTareas([...tareas, nuevaTarea]);
    }
  };

  // Función para actualizar el texto de una tarea existente.
  // Recibe el id de la tarea y el nuevo texto.
  const actualizarTarea = (id, nuevoTexto) => {
    // Se recorre el array de tareas y se reemplaza el texto de la tarea que coincide con el id.
    setTareas(
      tareas.map((t) =>
        t.id === id ? { ...t, texto: nuevoTexto } : t
      )
    );
  };

  // Función para eliminar una tarea.
  // Se filtra el array de tareas para eliminar la tarea cuyo id coincide.
  const eliminarTarea = (id) => {
    setTareas(tareas.filter((t) => t.id !== id));
  };

  // Función para marcar o desmarcar una tarea como completada.
  // Recibe el id de la tarea y alterna su propiedad "completada".
  const completarTarea = (id) => {
    setTareas(
      tareas.map((t) =>
        t.id === id ? { ...t, completada: !t.completada } : t
      )
    );
  };

  // Renderizamos el componente principal de la aplicación.
  return (
    <div className="contenedor">
      {/* Se renderiza el Header, pasando las props para controlar la visibilidad de tareas completadas */}
      <Header
        mostrarCompletadas={mostrarCompletadas}
        setMostrarCompletadas={setMostrarCompletadas}
      />

      {/* Se renderiza el formulario para agregar nuevas tareas, pasando la función agregarTarea */}
      <FormularioTareas agregarTarea={agregarTarea} />

      {/* Se renderiza la lista de tareas, pasando el array de tareas y las funciones necesarias */}
      <ListaTareas
        tareas={tareas}
        mostrarCompletadas={mostrarCompletadas}
        completarTarea={completarTarea}
        editarTarea={actualizarTarea}  /* Se pasa actualizarTarea con el nombre editarTarea para que coincida en el hijo */
        eliminarTarea={eliminarTarea}
      />
    </div>
  );
}

export default App;
// Exportamos el componente App para que pueda usarse en otros lugares, por ejemplo, en index.js
