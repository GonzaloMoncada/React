import React, { useState } from "react";

function App() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  function agregarTarea() {
    if (nuevaTarea !== "") {
      setTareas([...tareas, nuevaTarea]);
      setNuevaTarea("");
    }
  }

  function eliminarTarea(index) {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  }

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <input type="text" value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value)}/>
      <button onClick={agregarTarea}>Agregar tarea</button>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index} onClick={() => eliminarTarea(index)}>
            {tarea}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
