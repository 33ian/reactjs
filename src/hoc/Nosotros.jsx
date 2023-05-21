import { withProductsData } from "./withProductsData"


const Nosotros = ({productos, loading}) => {

    return (
        <div>
            <h2>Nosotros</h2>
            <hr/>
        </div>
    )
}

export default withProductsData(Nosotros)