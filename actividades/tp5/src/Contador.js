import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h2>{contador}</h2>
      <button onClick={() => setContador(contador + 1)}>sumar</button>
      <button onClick={() => setContador(contador - 1)}>restar</button>
    </div>
  );
}

export default Contador;