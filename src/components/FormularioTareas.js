// Importa React y el hook useState para manejar el estado local.
import React, { useState } from 'react';
import './FormularioTareas.css';

/**
 * Componente FormularioTareas
 * - Permite al usuario ingresar una nueva tarea mediante un input.
 */
function FormularioTareas({ agregarTarea }) {
  // Estado local para almacenar el texto del input.
  const [texto, setTexto] = useState('');

  /**
   * Maneja el envío del formulario.
   * - Previene el comportamiento por defecto.
   * - Valida el input y, si es correcto, llama a agregarTarea y limpia el input.
   */
  const manejarEnvio = (e) => {
    e.preventDefault();
    if (texto.trim() !== '') {
      agregarTarea(texto);
      setTexto('');
    }
  };

  return (
    <form onSubmit={manejarEnvio} className="formulario">
      {/* Div contenedor para agrupar el input, lo que permite aplicar estilos específicos */}
    <div className="input-wrapper">
      {/* Input de tipo texto:
         - El valor del input está ligado al estado "texto".
         - Cada vez que se escribe en el input, se actualiza el estado "texto" con el valor ingresado.
         - Texto de guía que se muestra cuando el campo está vacío. */}
      <input 
        type="text" 
        value={texto} 
        onChange={(e) => setTexto(e.target.value)} 
        placeholder="Escribe una tarea" 
      />
    </div>
      {/* Botón para enviar el formulario. Al pulsarlo se ejecuta la función "manejarEnvio" definida en el onSubmit del formulario. */}
  <button type="submit">+</button>
</form>

  );
}

export default FormularioTareas;
