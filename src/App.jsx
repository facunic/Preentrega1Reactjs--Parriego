import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// Importa los componentes necesarios
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/itemListContainer';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Integración de la NavBar */}
      <NavBar />

      {/* Resto del contenido*/}
      <h1>Tienda Online</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      {/* Integración del contenedor de la lista de ítems */}
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" />
    </>
  );
}

export default App;
