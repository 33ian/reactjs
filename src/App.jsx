import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"; 
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import Nosotros from "./hoc/Nosotros";
import  ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Contacto from "./hoc/Contacto";
import { CartContext, CartProvider } from './context/CartContext';
import { useState } from 'react';
import Cart from './components/Cart/Cart';

function App() {

  return (

  <CartProvider>
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path='/' element={<ItemListContainer oferta={"Ofertas de hasta 75%"}/> } />
        <Route path='/productos/:categoryId' element={ <ItemListContainer />} />
        <Route path='/detail/:itemId' element={ <ItemDetailContainer /> }/>
        <Route path='/cart'element={ <Cart/> } ></Route>
        <Route path='/nosotros' element={ <Nosotros />}/>
        <Route path='/contacto' element={ <Contacto />} />
        <Route path='*' element={ <Navigate to={"/"} /> }/>
      </Routes>
    </BrowserRouter>
  </CartProvider>


    )
}

export default App
