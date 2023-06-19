import './Style/App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Market from './Pages/Market';
import NotFound from './Pages/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/market' element={<Market></Market>}></Route>
          <Route path='/*' element={<NotFound></NotFound>}></Route>
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
