import { Link } from "react-router-dom"
import { CartWidget } from "../CartWidget/CartWidget"
import "./NavBar.css"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"



export const NavBar = () => {

    const {user, logout} = useContext(AuthContext)

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark ">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand"><img src="https://frikiup.co/wp-content/uploads/2022/02/002_RG_2021_FULL_LOCKUP_OFFWHITE.png" alt="logo" /> </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav" >
                            <li className="nav-item">
                                <Link to='/' className="nav-link" aria-current="page">Destacados</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Tienda
                                </a>
                                <ul className="dropdown-menu">
                                    <Link to="/productos/Ropa"><li className="dropdown-item" >Ropa</li></Link>
                                    <Link to="/productos/Coleccionables"><li className="dropdown-item" >Coleccionables</li></Link>
                                    <Link to="/productos/Arte"><li className="dropdown-item" >Arte</li></Link>
                                    <Link to="/productos/Accesorios"><li className="dropdown-item" >Accesorios</li></Link>
                                </ul>
                            </li>
                            <Link to='/nosotros'>
                                <li className="nav-item nav-link" aria-expanded="false">
                                    Nosotros
                                </li>
                            </Link>
                            <Link to='/contacto'>
                                <li className="nav-item nav-link" aria-expanded="false">
                                        Contacto
                                </li>
                            </Link>
                            
                            
                            
                            
                        </ul>
                        
                    </div>
                    <CartWidget />
                </div>
                <div className="container">
                    <p>Bienvenido {user.email}</p>
                    <button className="btn btn-danger" onClick={logout}>Logout</button>
                </div>
            </nav>
        </header>
    )
}