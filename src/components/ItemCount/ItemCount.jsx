

const ItemCount = ({cantidad, setCantidad, stock, agregar}) => {


    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < stock && setCantidad(cantidad + 1)
    }

    

    return (
        <div>
            <button onClick={handleRestar} className={`btn mx-1 ${cantidad === 1 ? "btn-outline-danger disabled" : " btn-primary"}`}>-</button>
            <span className="mx-2">{cantidad}</span>
            <button onClick={handleSumar} className={`btn mx-1 ${cantidad === stock ? "btn-outline-danger disabled" : "btn-primary"}`}>+</button>
            <br/>
            <button onClick={agregar} className="btn btn-success my-2">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount