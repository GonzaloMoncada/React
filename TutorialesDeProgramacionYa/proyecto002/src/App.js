import logo from './logo.svg';
import './App.css';

/*function retornarAleatorio() {
  return Math.trunc(Math.random() * 10);
}

function App() {
  const siglo = 21
  const persona = {
    nombre: 'Juan',
    edad: 34
  }
  return (
    <div>
      <h1>Título nivel 1</h1>
      <hr />
      <p>Estamos en el siglo {siglo}</p>
      <h3>Acceso a un objeto</h3>
      <p>{persona.nombre} tiene {persona.edad} años</p>
      <h3>Llamada a un método</h3>
      <p>Un valor aleatorio llamando a un método.</p>
      {retornarAleatorio()}
      <h3>Calculo inmediato de expresiones</h3>
      3 + 3 = {3 + 3}
    </div>
  );
  function retornarAleatorio() {
    return Math.trunc(Math.random() * 10);
  }
  
  function App() {
    const buscadores = ['http://www.google.com',
    'http://www.bing.com',
    'http://www.yahoo.com'];
    return (
      <div>
      <a href={buscadores[0]}>Google</a><br />
      <a href={buscadores[1]}>Bing</a><br />
      <a href={buscadores[2]}>Yahoo</a><br />
      </div>
      );
    }
    
  }
  */
  function mostrarTitulo(tit) {
    return (<h1>
      {tit}
    </h1>);
  }
  
  function App() {
    return (
      <div>
        {mostrarTitulo('Hola Mundo')}
        {mostrarTitulo('Fin')}
      </div>
    );
  }
  
    export default App;
