import "./CartWidget.css"
export const CartWidget = () => {
    return(
        <button type="button" className="btn btn-dark compra carrito" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i class="fa-solid fa-cart-shopping"></i>
            <p>3</p>
        </button>
    )
}

