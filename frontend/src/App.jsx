import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Service';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/services' element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
