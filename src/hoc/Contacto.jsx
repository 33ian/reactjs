import { withProductsData } from "./withProductsData"
import { useState } from "react"
import Swal from 'sweetalert2'
import './default.css'


const Contacto = ({productos, loading}) => {
    
    const [values, setValues] = useState({
        nombre: '',
        email: '',
        direccion: '',
    })

    const handleInputChange = (e) => {

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        Swal.fire({
            timer: 1000,
            timerProgressBar: true,
            showCloseButton: false,
            showCancelButton: false,
            showConfirmButton: false,
            title: 'Enviado correctamente',
            
            
            })
    }

    return (
        <div className="container my-5">
            <h2>Contacto</h2>
            <hr/>

            <form onSubmit={handleSubmit}>
                <input name="nombre" className="form-control my-2" type="text" placeholder="Nombre" value={values.nombre} onChange={handleInputChange}></input>
                <input name="email" className="form-control my-2" type="text" placeholder="Email" value={values.email} onChange={handleInputChange}></input>
                <hr />
                <input type="text" className="form-control my-2" placeholder="Dejanos tu sugerencia aca!" />
                
                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Contacto