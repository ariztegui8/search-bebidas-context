import {Col, Card, Button } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas';

const Bebidas = ({bebida}) => {

    const {handleModalClick, handleBebidaIdClick} = useBebidas()

    const {strDrink, strDrinkThumb, idDrink} = bebida;

  return (
    <Col md={6} lg={4}>
        <Card className="mb-4">
            <Card.Img 
                variant='top'
                src={strDrinkThumb}
                alt={`Imagen de ${strDrink}`}
            />
            <Card.Body>
                <Card.Title>{strDrink}</Card.Title>
                <Button
                    variant='success'
                    className='w-100 mt-2'
                    onClick={()=> {
                        handleModalClick()
                        handleBebidaIdClick(idDrink)
                    }}
                >
                    Más informacíon
                </Button>
            </Card.Body>
        </Card>
    </Col>
  )
}

export default Bebidas