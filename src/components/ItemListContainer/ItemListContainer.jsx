import "./ItemListContainer.css"
import { useContext, useEffect } from 'react'
import { useState } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import ItemList from '../ItemList/ItemList'
import { useParams, useSearchParams } from 'react-router-dom'
export const ItemListContainer = ({oferta}) =>{

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchParams] = useSearchParams()

    const search = searchParams.get('search')

    const { categoryId } = useParams()
    

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((data) => {
                if (!categoryId) {
                    setProductos(data)
                } else {
                    setProductos( data.filter((el) => el.category === categoryId) )
                }
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [categoryId])

    const listado = search
    ? productos.filter((el) => el.nombre.toLowerCase().includes(search.toLowerCase())) 
    : productos


    return(
        <div className="contenedor-items">
            <h2>Destacados</h2>
            <hr />
            <p>{oferta}</p>
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList items={listado}/>
            }
        </div>
    )
}