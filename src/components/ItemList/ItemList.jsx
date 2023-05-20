import ItemCard from "../ItemCard/ItemCard"
import "./ItemList.css"



const ItemList = ( {items} ) => {

    return (
        <div>
            <h2>Productos</h2>
            <hr/>

            <div className="lista row">

                {
                    items.map((prod) => <ItemCard item={prod} key={prod.id}/>)
                }
            </div>
        </div>
    )
}

export default ItemList