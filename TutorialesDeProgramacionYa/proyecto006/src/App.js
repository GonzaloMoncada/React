import Dado from "./Dado";
import { useState } from "react";
/*
function App() {
  const valor1 = Math.trunc(Math.random()*6)+1
  const valor2 = Math.trunc(Math.random()*6)+1
  const valor3 = Math.trunc(Math.random()*6)+1
  return (
    <div>
      <Dado valor={valor1} />
      <Dado valor={valor2} />
      <Dado valor={valor3} />                
    </div>      
  );
}
*/
function App() {

  function generarValor() {
    return Math.trunc(Math.random() * 6) + 1
  }

  function tirar() {
    setNumero1(generarValor())
    setNumero2(generarValor())
    setNumero3(generarValor())
  }

  const [numero1, setNumero1] = useState(generarValor())
  const [numero2, setNumero2] = useState(generarValor())
  const [numero3, setNumero3] = useState(generarValor())
  return (
    <div>
      <Dado valor={numero1} />
      <Dado valor={numero2} />
      <Dado valor={numero3} />
      <button onClick={tirar}>Tirar</button>
    </div>
  );
}

export default App;