import { withProductsData } from "./withProductsData"
import { useState } from "react"


const Contacto = ({productos, loading}) => {
    
    const [values, setValues] = useState({
        nombre: '',
        email: '',
        direccion: '',
    })

    const handleInputChange = (e) => {
        console.log(e.target.name)

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submit")
        console.log(values)
    }

    return (
        <div className="container my-5">
            <h2>Contacto</h2>
            <hr/>

            <form onSubmit={handleSubmit}>
                <input name="nombre" className="form-control my-2" type="text" placeholder="Nombre" value={values.nombre} onChange={handleInputChange}></input>
                <input name="direccion" className="form-control my-2" type="text" placeholder="Direccion" value={values.direccion} onChange={handleInputChange}></input>
                <input name="email" className="form-control my-2" type="text" placeholder="Email" value={values.email} onChange={handleInputChange}></input>
                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Contacto