import React, { useState } from 'react';
import Header from './components/Header';
import FormularioTareas from './components/FormularioTareas';
import ListaTareas from './components/ListaTareas';
import './App.css';

function App() {
  const [tareas, setTareas] = useState([]);
  const [mostrarCompletadas, setMostrarCompletadas] = useState(true);

  const agregarTarea = (texto) => {
    const nombreTarea = texto.trim();

    // Comprobamos si ya existe una tarea con ese nombre
    const existe = tareas.some(
      (t) => t.texto.toLowerCase() === nombreTarea.toLowerCase()
    );
    if (existe) {
      alert('Ya existe una tarea con ese nombre');
      return;
    }

    if (nombreTarea !== '') {
      const nuevaTarea = {
        id: Date.now(),
        texto: nombreTarea,
        completada: false,
      };
      setTareas([...tareas, nuevaTarea]);
    }
  };

  const actualizarTarea = (id, nuevoTexto) => {
    setTareas(
      tareas.map((t) =>
        t.id === id ? { ...t, texto: nuevoTexto } : t
      )
    );
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((t) => t.id !== id));
  };

  const completarTarea = (id) => {
    setTareas(
      tareas.map((t) =>
        t.id === id ? { ...t, completada: !t.completada } : t
      )
    );
  };

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

export default App;
