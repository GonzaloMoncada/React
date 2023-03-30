import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

/*
function App() {

  function generarAleatorio() {
    const v = Math.trunc(Math.random() * 10);
    setNumero(v)
  }

  const [numero, setNumero] = useState(0);

  return (
    <div>
      <p>Número aleatorio: {numero}</p>
      <button onClick={generarAleatorio}>Generar número aleatorio</button>
    </div>
  );
}
*/
function App() {

  function generarAleatorios() {
    const vec = new Array(5)
    for (let x = 0; x < vec.length; x++)
      vec[x] = Math.trunc(Math.random() * 10)
    setNumeros(vec)
  }

  const [numeros, setNumeros] = useState([1, 0, 0, 0, 0]);

  return (
    <div>
      <p>Números aleatorios:</p>
      {numeros.map(num => (<p>{num}</p>))}
      <button onClick={generarAleatorios}>Generar números aleatorios</button>
    </div>
  );
}

export default App;
