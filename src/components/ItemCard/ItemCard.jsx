import { Link } from "react-router-dom"
import "./ItemCard.css"


const ItemCard = ({item}) => {

    return (
        <div className='tarjeta-producto col-3 m-5'>
            <h3>{item.nombre}</h3>
            <Link to={`/detail/${item.id}`}> <img src={item.img} alt={item.nombre}/></Link>
            <p><strong>Precio: €{item.precio}</strong></p>
            {item.stock <= 10 && <p style={{background: 'red'}}>Ultimas</p>}
        </div>
    )
}

export default ItemCard