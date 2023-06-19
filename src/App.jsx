import './Style/App.css';
import Home from './Components/Home';
import About from './Components/About';
import Market from './Components/Market';
import NotFound from './Components/NotFound';
import {  BrowserRouter as Router, Routes as Rutas, Route as Ruta } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Rutas>
        <Ruta path='/' element={<Home></Home>}></Ruta>
        <Ruta path='/about' element={<About></About>}></Ruta>
        <Ruta path='/market' element={<Market></Market>}></Ruta>
        <Ruta path='/*' element={<NotFound></NotFound>}></Ruta>
      </Rutas>
    </Router>
  );
}

export default App;
