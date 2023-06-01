import { withProductsData } from "./withProductsData"
import './default.css'


const Nosotros = ({productos, loading}) => {

    return (
        <div className="container my-5">
            <h2>Nosotros</h2>
            <hr/>
        </div>
    )
}

export default withProductsData(Nosotros)