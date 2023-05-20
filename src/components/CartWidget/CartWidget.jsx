import { Link } from "react-router-dom"
import "./CartWidget.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

export const CartWidget = () => {
        const {totalCantidad} = useContext(CartContext)

        return(
        <Link to = "/cart" type="button" className="btn btn-dark compra carrito">
                <i className="fa-solid fa-cart-shopping"></i>
                <span> {totalCantidad()} </span>
                
        </Link>
        )
}

