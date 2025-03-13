import React, { useState } from 'react';
import Header from './components/Header';
import FormularioTareas from './components/FormularioTareas';
import ListaTareas from './components/ListaTareas';
import './App.css';

function App() {
  const [tareas, setTareas] = useState([]);
  const [mostrarCompletadas, setMostrarCompletadas] = useState(true);

  const agregarTarea = (texto) => {
    const nuevaTarea = { id: Date.now(), texto, completada: false };
    setTareas([...tareas, nuevaTarea]);
  };

  const actualizarTarea = (id, nuevoTexto) => {
    setTareas(tareas.map(t => t.id === id ? { ...t, texto: nuevoTexto } : t));
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(t => t.id !== id));
  };

  const completarTarea = (id) => {
    setTareas(tareas.map(t => t.id === id ? { ...t, completada: !t.completada } : t));
  };

  return (
    <div className="contenedor">
      <Header mostrarCompletadas={mostrarCompletadas} setMostrarCompletadas={setMostrarCompletadas} />
      <FormularioTareas agregarTarea={agregarTarea} />
      <ListaTareas 
        tareas={tareas} 
        mostrarCompletadas={mostrarCompletadas} 
        actualizarTarea={actualizarTarea} 
        eliminarTarea={eliminarTarea} 
        completarTarea={completarTarea} 
      />
    </div>
  );
}

export default App;