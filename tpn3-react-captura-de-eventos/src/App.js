import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='contenedor'>
      <form onSubmit={mostrar}>
          <input type="text" name="txt"/>
        <p>
          <input type="submit" value="enviar"/>
        </p>
      </form>
    </div>
  );
  function mostrar(e)
  {
    e.preventDefault();
    const largo = e.target.txt.value;
    alert(cantidadVocales(largo));
  }
  //funcion para contar vocales
  function cantidadVocales(largo)
  {
    var contador=0;
    for(let i=0; i<largo.length; i++)
    {
      if(largo[i]=='a' || largo[i]=='e' || largo[i]=='i' || largo[i]=='o' || largo[i]=='u')
      contador++;
    }
    return contador;
  }
}

export default App;
