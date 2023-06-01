import { Link } from "react-router-dom"
import "./ItemCard.css"


const ItemCard = ({item}) => {

    return (
        <div className='tarjeta-producto col-3 m-5'>
            <Link to={`/detail/${item.id}`}> <img src={item.img} alt={item.nombre}/></Link>
            <h3>{item.nombre}</h3>
            <p className="precio">Precio: {item.precio} €</p>
            {item.stock <= 10 && <p className="ultimas">Ultimas</p>}
        </div>
    )
}

export default ItemCard