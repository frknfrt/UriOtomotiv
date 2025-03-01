import React from 'react';
import './AppStyle.css'
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import ContactPage from './Pages/ContactPages';
import Products from './components/products';
import './AppStyle.css';


const App = () =>  {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/products/:width' element={<Products/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
