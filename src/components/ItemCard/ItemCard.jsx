import { Link } from "react-router-dom"
import "./ItemCard.css"


const ItemCard = ({item}) => {

    return (
        <div className='tarjeta-producto col-3 m-5'>
            <h3>{item.nombre}</h3>
            <img src={item.img} alt={item.nombre}/>
            <p><strong>Precio: €{item.precio}</strong></p>
            <Link to={`/detail/${item.id}`} className='btn btn-primary'>Ver más</Link>
        </div>
    )
}

export default ItemCard