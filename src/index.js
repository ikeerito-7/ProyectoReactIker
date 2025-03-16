// Importa React para poder usar JSX y crear componentes.
import React from 'react';
// Importa ReactDOM para renderizar la aplicación en el DOM del navegador.
import ReactDOM from 'react-dom/client';

// Importa el componente principal "App", que actúa como contenedor global.
import App from './App';

// Importa los estilos globales para toda la aplicación.
import './index.css';

// Se crea la raíz de la aplicación, obteniendo el elemento HTML con el id "root".
// Este elemento es el contenedor donde React montará toda la interfaz.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Montamos el componente App en el nodo root con root.render()
// Se renderiza el componente "App" dentro de un <React.StrictMode>.
// StrictMode ayuda a identificar problemas potenciales durante el desarrollo.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
