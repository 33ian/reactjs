import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer"
import { NavBar } from "../components/NavBar/NavBar"
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer"
import Cart from "../components/Cart/Cart"
import LoginScreen from "../components/LoginScreen/LoginScreen"
import RegisterScreen from "../components/LoginScreen/RegisterScreen"
import Contacto from "../hoc/Contacto"
import Nosotros from "../hoc/Nosotros"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"


const AppRouter = () => {

    const {user} = useContext(AuthContext)

    return (
        <BrowserRouter>
            {
                user.logged
                    ? <>
                        <NavBar />
                        <Routes>
                            <Route path='/' element={<ItemListContainer oferta={"Ofertas de hasta 75%"} />} />
                            <Route path='/productos/:categoryId' element={<ItemListContainer />} />
                            <Route path='/detail/:itemId' element={<ItemDetailContainer />} />
                            <Route path='/cart' element={<Cart />} ></Route>
                            <Route path='/nosotros' element={<Nosotros />} />
                            <Route path='/contacto' element={<Contacto />} />
                            <Route path='*' element={<Navigate to={"/"} />} />
                        </Routes>
                    </>
                    :
                    <Routes>
                        <Route path='/login' element={<LoginScreen />} />
                        <Route path='/register' element={<RegisterScreen />} />
                        <Route path='*' element={<Navigate to="/login" />} />
                    </Routes>
            }
        </BrowserRouter>
    )
}

export default AppRouter