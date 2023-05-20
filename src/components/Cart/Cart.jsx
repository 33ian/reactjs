import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import "./Cart.css"

const Cart = () => {
    const {cart, emptyCart, totalCompra, removeItem} = useContext(CartContext)

    return(
        <div className=" container my-5">
            <h2>Tu compra</h2>
            <hr/>
            <div className="container-cart">
                {
                    cart.map((item) => (
                        <div className="carrito-card col-2 m-5" key={item.id}>
                            <h3>{item.nombre}</h3>
                            <img src={item.img}/>
                            <p>Cantidad: {item.cantidad}</p>
                            <strong>Subtotal: €{item.cantidad * item.precio}</strong>
                            <button onClick={()=>removeItem(item.id)} className="btn btn-danger trash"><i className="fa-solid fa-trash"></i></button>
                            <hr/>
                        </div>
                    ))
                }
            </div>
            <div className="vaciar">
                <h2>Total: €{totalCompra()}</h2>
                <hr/>
                <button onClick={emptyCart} className="btn btn-danger">Vaciar carrito</button>
            </div>
        </div>
    )
}

export default Cart