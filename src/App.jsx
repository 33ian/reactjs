import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"; 
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import Nosotros from "./hoc/Nosotros";
import  ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Contacto from "./hoc/Contacto";


function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path='/' element={<ItemListContainer oferta={"Ofertas de hasta 75%"}/> } />
        <Route path='/productos/:categoryId' element={ <ItemListContainer />} />
        <Route path='/detail/:itemId' element={ <ItemDetailContainer /> }/>
        <Route path='/nosotros' element={ <Nosotros />}/>
        <Route path='/contacto' element={ <Contacto />} />
        <Route path='*' element={ <Navigate to={"/"} /> }/>
      </Routes>
    </BrowserRouter>
    )
}

export default App
