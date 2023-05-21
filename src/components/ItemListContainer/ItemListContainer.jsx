import "./ItemListContainer.css"
import { useEffect } from 'react'
import { useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams,} from 'react-router-dom'
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/config"
export const ItemListContainer = ({oferta}) =>{

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db, "productos" )
        const q = categoryId
                    ? query(productosRef, where("category", "==", categoryId))
                    : productosRef

        getDocs(q)
            .then((res)=> {
                const docs = res.docs.map((doc)=> {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                })
                
                setProductos(docs)
            })
        .catch(e => console.log(e))
        .finally(()=> setLoading(false))

    }, [categoryId])

    return(
        <div className="contenedor-items">
            <h2>Destacados</h2>
            <hr />
            <p>{oferta}</p>
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList items={productos}/>
            }
        </div>
    )
}