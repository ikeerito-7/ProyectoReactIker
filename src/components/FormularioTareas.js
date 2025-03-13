import React, { useState } from 'react'; // Importamos React y el hook useState
import './FormularioTareas.css'; // Importamos los estilos específicos del formulario

/**
 * Componente FormularioTareas
 * Se encarga de capturar el texto ingresado por el usuario y enviarlo a la función agregarTarea.
 *
 * Props:
 * - agregarTarea: Función que se ejecuta al enviar el formulario para agregar una nueva tarea.
 */
function FormularioTareas({ agregarTarea }) {
  // Estado local para almacenar el texto de la nueva tarea
  const [texto, setTexto] = useState('');

  /**
   * Función manejarEnvio
   * Se ejecuta cuando el usuario envía el formulario.
   * Previene el comportamiento por defecto del formulario y agrega la tarea si el texto no está vacío.
   */
  const manejarEnvio = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    if (texto.trim() !== '') { // Verifica que el campo no esté vacío
      agregarTarea(texto); // Llama a la función agregarTarea con el texto ingresado
      setTexto(''); // Resetea el campo de texto después de agregar la tarea
    }
  };

  return (
    <form onSubmit={manejarEnvio} className="formulario">
      {/* Campo de entrada donde el usuario escribe la tarea */}
      <input 
        type="text" 
        value={texto} 
        onChange={(e) => setTexto(e.target.value)} 
        placeholder="Escribe una tarea" 
      />
      
      {/* Botón para enviar la tarea */}
      <button type="submit">+</button>
    </form>
  );
}

export default FormularioTareas;
