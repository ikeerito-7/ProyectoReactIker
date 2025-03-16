// Importa React para poder usar JSX y ReactDOM para renderizar la aplicación.
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importa el componente principal de la aplicación.
import App from './App';

// Importa los estilos globales.
import './index.css';

// Crea la raíz de la aplicación a partir del elemento con id 'root'.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza el componente App dentro del StrictMode para ayudar a detectar problemas en desarrollo.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

