// Importa React y el hook useState para manejar el estado.
import React, { useState } from 'react';

// Importa los componentes hijos que se encargarán de partes específicas de la interfaz.
import Header from './components/Header';
import FormularioTareas from './components/FormularioTareas';
import ListaTareas from './components/ListaTareas';

// Importa los estilos globales específicos de este componente.
import './App.css';

function App() {
  // Estado que almacena las tareas. Se inicializa como un array vacío.
  const [tareas, setTareas] = useState([]);
  
  // Estado para controlar si se muestran todas las tareas o solo las pendientes.
  const [mostrarCompletadas, setMostrarCompletadas] = useState(true);

  /**
   * Función para agregar una nueva tarea.
   * - Limpia el texto ingresado.
   * - Verifica que no exista ya una tarea con el mismo nombre.
   * - Crea un objeto tarea con un id único y lo agrega al estado.
   */
  const agregarTarea = (texto) => {
    const nombreTarea = texto.trim();
    const existe = tareas.some(
      (t) => t.texto.toLowerCase() === nombreTarea.toLowerCase()
    );
    if (existe) {
      alert('Ya existe una tarea con ese nombre');
      return;
    }
    if (nombreTarea !== '') {
      const nuevaTarea = {
        id: Date.now(),        // Genera un identificador único basado en el timestamp.
        texto: nombreTarea,    // Guarda el texto de la tarea.
        completada: false,     // Inicialmente, la tarea no está completada.
      };
      setTareas([...tareas, nuevaTarea]);
    }
  };

  /**
   * Función para actualizar el texto de una tarea existente.
   * - Mapea el array de tareas y, si el id coincide, actualiza el texto.
   */
  const actualizarTarea = (id, nuevoTexto) => {
    setTareas(
      tareas.map((t) =>
        t.id === id ? { ...t, texto: nuevoTexto } : t
      )
    );
  };

  /**
   * Función para eliminar una tarea.
   * - Filtra el array de tareas para eliminar la tarea cuyo id coincida.
   */
  const eliminarTarea = (id) => {
    setTareas(tareas.filter((t) => t.id !== id));
  };

  /**
   * Función para alternar el estado "completada" de una tarea.
   * - Mapea el array y cambia el valor de "completada" de la tarea identificada.
   */
  const completarTarea = (id) => {
    setTareas(
      tareas.map((t) =>
        t.id === id ? { ...t, completada: !t.completada } : t
      )
    );
  };

  // Renderiza los componentes hijos, pasando los estados y funciones necesarias mediante props.
  return (
    <div className="contenedor">
      <Header
        mostrarCompletadas={mostrarCompletadas}
        setMostrarCompletadas={setMostrarCompletadas}
      />
      <FormularioTareas agregarTarea={agregarTarea} />
      <ListaTareas
        tareas={tareas}
        mostrarCompletadas={mostrarCompletadas}
        completarTarea={completarTarea}
        editarTarea={actualizarTarea}
        eliminarTarea={eliminarTarea}
      />
    </div>
  );
}

// Exporta el componente para poder utilizarlo en otros archivos.
export default App;
