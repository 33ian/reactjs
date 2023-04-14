import "./ItemListContainer.css"
export const ItemListContainer = ({oferta}) =>{

    return(
        <div className="contenedor-items">
            <h2>Destacados</h2>
            <hr />
            <p>{oferta}</p>
        </div>
    )
}