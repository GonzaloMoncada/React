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
    alert(e.target.txt.value);
  }
  
}

export default App;
