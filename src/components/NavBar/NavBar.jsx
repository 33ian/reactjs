import { Link } from "react-router-dom"
import { CartWidget } from "../CartWidget/CartWidget"
import "./NavBar.css"
export const NavBar = () => {

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark ">
                <div className="container-fluid">
                    <Link to="/"><a className="navbar-brand"><img src="https://frikiup.co/wp-content/uploads/2022/02/002_RG_2021_FULL_LOCKUP_OFFWHITE.png" alt="logo" /></a> </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav" >
                            <li className="nav-item">
                                <Link to='/'><a className="nav-link" aria-current="page">Destacados</a></Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Tienda
                                </a>
                                <ul className="dropdown-menu">
                                    <Link to="/productos/Ropa"><li><a className="dropdown-item" >Ropa</a></li></Link>
                                    <Link to="/productos/Coleccionables"><li><a className="dropdown-item" >Coleccionables</a></li></Link>
                                    <Link to="/productos/Arte"><li><a className="dropdown-item" >Arte</a></li></Link>
                                    <Link to="/productos/Accesorios"><li><a className="dropdown-item" >Accesorios</a></li></Link>
                                </ul>
                            </li>
                            <Link to='/nosotros'><li className="nav-item">
                                <a className="nav-link" aria-expanded="false">
                                    Nosotros
                                </a>
                                
                            </li></Link>
                            <Link to='/contacto'><li className="nav-item">
                                <a className="nav-link" aria-expanded="false">
                                    Contacto
                                </a>
                            </li></Link>
                            
                            
                            
                            
                        </ul>
                        
                    </div>
                    <CartWidget />
                </div>
            </nav>
        </header>
    )
}