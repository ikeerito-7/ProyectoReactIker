import React, { useState } from 'react';
import './FormularioTareas.css';

function FormularioTareas({ agregarTarea }) {
  const [texto, setTexto] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (texto.trim() !== '') {
      agregarTarea(texto);
      setTexto('');
    }
  };

  return (
    <form onSubmit={manejarEnvio} className="formulario">
      <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)} placeholder="Escribe una tarea" />
      <button type="submit">+</button>
    </form>
  );
}

export default FormularioTareas;