import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Navigate, Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { collection, addDoc, doc, updateDoc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config"



const Checkout = () => {

    const {cart,totalCompra, emptyCart} = useContext(CartContext)
    const {user} = useContext(AuthContext)

    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: user.email,
    })

    const [orderId, setOrderId] = useState(null)

    const handleSubmit = (e) =>{
        e.preventDefault()

        const {nombre, direccion, email} = values
        if (nombre.length < 2) {
            alert("El nombre es demasiado corto")
            return
        }
        if (direccion.length < 4) {
            alert("La direccion es invalida")
            return
        }
        if (email.length < 10) {
            alert("El email es invalido")
            return
        }
        
        const orden = {
            client: values,
            items: cart.map(item => ({id: item.id, nombre: item.nombre, cantidad: item.cantidad, precioUnidad: item.precio})),
            total: totalCompra(),
            fyh: new Date()
        }

        // console.log(orden)

        orden.items.forEach((item)=>{
            const itemRef = doc(db, "productos", item.id)

            getDoc(itemRef)
                .then((doc) => {

                    if(doc.data().stock >= item.cantidad){
                        updateDoc(itemRef, {
                            stock: doc.data().stock - item.cantidad 
                        })
                    }else{
                        alert("En este momento no hay stock disponible de " + item.nombre)
                    }
                })
        })
    

        const ordersRef = collection(db, "orders")

        addDoc(ordersRef, orden)
            .then((doc)=> {
                setOrderId(doc.id)
                emptyCart()
            })
    }

    const handleInput = (e) =>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    if (orderId){
        return(
            <div className="container my-5">
                <h2>Tu compra se registro exitosamente!</h2>
                <hr/>
                <p>Guarda tu numero de orden: {orderId}</p>

                <Link to="/" className="btn btn-primary">Volver</Link>
            </div>
        )
    }

    if(cart.length === 0) {
        return <Navigate to='/'/>
    }

    return(
        <div className="container my-5">
            <h2>Checkout</h2>
            <hr/>

            <form onSubmit={handleSubmit}>
                <input
                    className="form-control my-2"
                    type="text"
                    placeholder="Nombre"
                    value={values.nombre}
                    name="nombre"
                    onChange={handleInput}
                />
                <input
                    className="form-control my-2"
                    type="text"
                    placeholder="Dirección"
                    value={values.direccion}
                    name="direccion"
                    onChange={handleInput}
                />
                <input
                    className="form-control my-2"
                    type="email"
                    placeholder="Email"
                    value={values.email}
                    name="email"
                    onChange={handleInput}
                    readOnly
                />

                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Checkout