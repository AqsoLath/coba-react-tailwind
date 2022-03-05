import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home'
import About from './About'
import Navbar, {NavbarBawah} from './Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />
        </Routes>
      <NavbarBawah />
    </div>
  );
}

export default App;
