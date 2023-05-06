import { CartWidget } from "../CartWidget/CartWidget"
import "./NavBar.css"
export const NavBar = () => {

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src="https://frikiup.co/wp-content/uploads/2022/02/002_RG_2021_FULL_LOCKUP_OFFWHITE.png" alt="logo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav" >
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Destacados</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Tienda
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Ropa</a></li>
                                    <li><a className="dropdown-item" href="#">Coleccionables</a></li>
                                    <li><a className="dropdown-item" href="#">Arte</a></li>
                                    <li><a className="dropdown-item" href="#">Accesorios</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Nosotros
                                </a>
                                
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Contacto
                                </a>
                            </li>
                            
                            
                            
                            
                        </ul>
                        
                    </div>
                    <CartWidget />
                </div>
            </nav>
        </header>
    )
}