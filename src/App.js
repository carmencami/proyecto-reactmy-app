import Testimonio from "./componentes/testimonio.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="contenedor-app">
      <h1>Esto es lo que dicen nuestros alumnos</h1>
      <Testimonio
      nombre='Ennma García'
      pais='Boston'
      imagen='1'
      cargo='Abogada'
      empresa='spotify'
      testimonio='jhkjhkjhkjhkjhjkhjkhjkhkjhkjhkjhkjhkjhkjhkjhkjhkjhkjhjkhjkhkjhkjhkjhjjkhkhkjhkjhjkhkj'/>
      <Testimonio
      nombre='Marco Martín'
      pais='Spain'
      imagen='2'
      cargo='Enginer'
      empresa='Babel'
      testimonio='le gusta mucho el aire libre y disfritar de todas las cosas posibles. lleva estudiando años progranación web y ahora es un experto '/>
      <Testimonio
      nombre='Marta Martinez'
      pais='France'
      imagen='3'
      cargo='Cocinera'
      empresa='Los quintos'
      testimonio='le gusta mucho el aire libre y disfritar de todas las cosas posibles. lleva estudiando años progranación web y ahora es un experto '/>
    
    </div>
    </div>


  
  );
}

export default App;
