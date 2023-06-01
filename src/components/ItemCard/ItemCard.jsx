import { Link } from "react-router-dom"
import "./ItemCard.css"
import Swal from 'sweetalert2'


const ItemCard = ({item}) => {


    if(item.stock === 0){
        return(
            <div className='tarjeta-sinstock col-3 m-5'>
            <Link to={`/`}> <img src={item.img} alt={item.nombre}/></Link>
            <h3>{item.nombre}</h3>
            <p className="precio">Precio: {item.precio} €</p>
            <p className="ultimas">Sin stock</p>
        </div>
        )
        }if(item.stock <= 10){
            return(
                <div className='tarjeta-producto col-3 m-5'>
                    <Link to={`/detail/${item.id}`}> <img src={item.img} alt={item.nombre}/></Link>
                    <h3>{item.nombre}</h3>
                    <p className="precio">Precio: {item.precio} €</p>
                    <p className="ultimas">Ultimas</p>
                </div>
            )
        }else{
            return(
                <div className='tarjeta-producto col-3 m-5'>
                    <Link to={`/detail/${item.id}`}> <img src={item.img} alt={item.nombre}/></Link>
                    <h3>{item.nombre}</h3>
                    <p className="precio">Precio: {item.precio} €</p>
                    
                </div>
            )
        }
    // return (
    //     <div className='tarjeta-producto col-3 m-5'>
    //         <Link to={`/detail/${item.id}`}> <img src={item.img} alt={item.nombre}/></Link>
    //         <h3>{item.nombre}</h3>
    //         <p className="precio">Precio: {item.precio} €</p>
    //         {item.stock <= 10 && <p className="ultimas">Ultimas</p>}
    //     </div>
    // )
}

export default ItemCard