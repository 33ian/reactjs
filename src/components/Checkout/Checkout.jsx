import { useContext, useState, useTransition } from "react"
import { CartContext } from "../../context/CartContext"
import { Navigate, Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { collection, addDoc, writeBatch, getDocs, query, where, documentId } from "firebase/firestore"
import { db } from "../../firebase/config"
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Swal from 'sweetalert2'



const schema = Yup.object().shape({
    nombre: Yup.string()
                .required("Este campo es obligatorio")
                .min (2, "El nombre es muy corto")
                .max (20, "El nombre es demasiado largo"),
    direccion: Yup.string()
                    .required("Este campo es obligatorio")
                    .min(6, "La direccion es muy corta")
                    .max(20, "La direccion es demasiado larga"),
    email: Yup.string()
                .email("Ingrese un email válido")
                .required("Este campo es obligatorio")

})

const Checkout = () => {

    const [loading, setLoading] = useState(false)
    const { cart, totalCompra, emptyCart } = useContext(CartContext)
    const { user } = useContext(AuthContext)
    const [orderId, setOrderId] = useState(null)


    const generarOrden = async (values) => {
        setLoading(true)

        const orden = {
            client: values,
            items: cart.map(item => ({ id: item.id, nombre: item.nombre, cantidad: item.cantidad, precioUnidad: item.precio })),
            total: totalCompra(),
            fyh: new Date()
        }

        const batch = writeBatch(db)
        const productosRef = collection(db, "productos")
        const ordersRef = collection(db, "orders")

        const q = query(productosRef, where(documentId(), "in", cart.map(item => item.id)))

        const outOfStock = []

        const productos = await getDocs(q)

        productos.docs.forEach((doc) => {
            const item = cart.find((i) => i.id === doc.id)
            const stock = doc.data().stock

            if (stock >= item.cantidad) {
                batch.update(doc.ref, {
                    stock: stock - item.cantidad

                })
            } else {
                outOfStock.push(item)

            }
        })

        if (outOfStock.length === 0) {
            addDoc(ordersRef, orden)
                .then((doc) => {
                    batch.commit()
                    setOrderId(doc.id)
                    emptyCart()
                    setLoading(false)
                })

        } else {
                Swal.fire({
                icon: 'error',
                title: '¡Hay items sin stock!',
                text: 'Vuelve mas tarde',
                timer: 3000,
                timerProgressBar: true

                
                })
                setLoading(false)
            
            
        }
    }

    if (orderId) {
        Swal.fire({
            icon: 'success',
            title: '¡Tu compra se registró exitosamente!',
            text: `Guarda tu número de orden: ${orderId}`,
            
            })
    }

    if (cart.length === 0) {
        return <Navigate to='/' />
    }

    return (
        <div className="container my-5">
            <h2>Checkout</h2>
            <hr />

            <Formik
                initialValues={{
                    nombre: '',
                    direccion: '',
                    email: user.email,
                }}
                validationSchema={schema}
                onSubmit={generarOrden}
            >
                {({errors}) => (
                    <Form>
                        <Field name="nombre" type="text" placeholder="Nombre" className="form-control my-2"/>
                        <ErrorMessage name="nombre" component={"p"} />
                        <Field name="direccion" type="text"  placeholder="Direccion" className="form-control my-2"/>
                        <ErrorMessage name="direccion" component={"p"} />
                        <Field name="email" type="email" placeholder="Email" className="form-control my-2"/>
                        <ErrorMessage name="email" component={"p"} />

                        <button disabled={loading} className=" btn btn-primary" type="submit"> Enviar </button>
                    </Form>
                )}
            </Formik>


        </div>
    )
}

export default Checkout