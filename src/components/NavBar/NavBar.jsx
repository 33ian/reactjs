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
                                    Ropa
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Camisetas</a></li>
                                    <li><a className="dropdown-item" href="#">Parte inferior</a></li>
                                    <li><a className="dropdown-item" href="#">Sudaderas y chaquetas</a></li>
                                    <li><a className="dropdown-item" href="#">De estar por casa</a></li>
                                    <li><a className="dropdown-item" href="#">Sombreros y gorros</a></li>
                                    <li><a className="dropdown-item" href="#">Joyerias</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Coleccionables
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Figuras</a></li>
                                    <li><a className="dropdown-item" href="#">Estatuillas</a></li>
                                    <li><a className="dropdown-item" href="#">Pines</a></li>
                                    <li><a className="dropdown-item" href="#">Peluches</a></li>
                                    <li><a className="dropdown-item" href="#">Juegos de mesa</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Arte
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Pósteres</a></li>
                                    <li><a className="dropdown-item" href="#">Cómics y libros</a></li>
                                    <li><a className="dropdown-item" href="#">Ilustraciones</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Accesorios
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Sombreros y gorros</a></li>
                                    <li><a className="dropdown-item" href="#">Joyería</a></li>
                                    <li><a className="dropdown-item" href="#">Tazas</a></li>
                                    <li><a className="dropdown-item" href="#">Alfombrillas para ratón</a></li>
                                    <li><a className="dropdown-item" href="#">Otros</a></li>
                                </ul>
                            </li>
                            
                            
                            
                            
                        </ul>
                        
                    </div>
                    <CartWidget />
                </div>
            </nav>
        </header>
    )
}