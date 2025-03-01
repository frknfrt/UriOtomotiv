import React from 'react';
import './AppStyle.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import ContactPage from './Pages/ContactPages';
import Products from './components/products';
import FloatingIcons from './components/common/FloatingIcons'; // İkonları import ettik!

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/products/:width' element={<Products/>}/>
      </Routes>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products/:width' element={<Products />} />
        </Routes>
        
        {/* FloatingIcons bileşenini Router dışında ama Routes içinde çağırıyoruz */}
        <FloatingIcons />
      </BrowserRouter>
    </div>
  );
}

export default App;