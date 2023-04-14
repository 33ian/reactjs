import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"; 
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";


function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer oferta={"Ofertas de hasta 75%"}/>
    </div>
  )
}

export default App
