import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home'
import About from './About'
import Masuk from './Masuk'
import Daftar from './Daftar';
import Promo from './Promo';
import PromoDetail from './PromoDetail';
import Navbar, {NavbarBawah} from './Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/masuk' element={<Masuk/>} />
          <Route path='/daftar' element={<Daftar/>} />
          <Route path='/promo' element={<Promo/>} />
          <Route path='/promo/:title' element={<PromoDetail/>} />
        </Routes>
      <NavbarBawah />
    </div>
  );
}

export default App;
