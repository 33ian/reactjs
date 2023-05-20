import { useContext, useState } from "react"
import "./ItemDetail.css"
import { CartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"



const ItemDetail = ({item}) => {
    const {agregarAlCarrito, isInCart} = useContext(CartContext)
    const [cantidad, setCantidad] = useState(1)
    
    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad
        }

        agregarAlCarrito(newItem)
    }


    return (
        <div>
            <h3>{item.nombre}</h3>
            <div className="detalles">
                <img src={item.img} alt={item.nombre}/>
                <p>{item.descripcion}</p>
            </div>
            <p>Categoria: {item.category}</p>
            <p><strong>Precio: €{item.precio}</strong></p>

            {
                isInCart(item.id)
                    ? <Link className="btn btn-success" to="/cart"> Terminar mi compra </Link>
                    : <ItemCount
                    cantidad={cantidad}
                    setCantidad={setCantidad}
                    stock={item.stock}
                    agregar={handleAgregar}
                    />
            }
            </div>
    )
}

export default ItemDetail