import useBebidas from "../hooks/useBebidas"
import Bebidas from "./Bebidas"
import {Row} from 'react-bootstrap'


const ListadoBebidas = () => {

    const {bebidas} = useBebidas()

  return (
    <Row className="mt-5">
        {bebidas.map(bebida => (
            <Bebidas
            bebida={bebida}
            key={bebida.idDrink}
            />
        ))}
    </Row>
  )
}

export default ListadoBebidas