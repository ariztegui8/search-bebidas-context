import { useState } from "react"
import { Form, Row, Col, Button, Alert} from "react-bootstrap"
import useCategoria from "../hooks/useCategoria"
import useBebidas from "../hooks/useBebidas"


const Formulario = () => {

    const {categorias} = useCategoria()
    const {consultarBebida} = useBebidas()

    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: ''
    });

    const [alerta, setAlerta] = useState('');

    const {nombre, categoria} = busqueda;

    const handleChange = e =>{
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();
        
        if(Object.values(busqueda).includes('')){
            setAlerta('Todos los campos son obligatorios')
            return
        }
        setAlerta('')
        consultarBebida(busqueda)
    }

    

   

  return (
    <Form
        onSubmit={handleSubmit}
    >
        <Row>
            <Col md={6}>
                <Form.Group>
                    <Form.Label htmlFor="nombre">
                        Nombre Bebida
                    </Form.Label>
                    <Form.Control 
                        id="nombre"
                        type="text"
                        placeholder="Ej: Cerveza, Ron, etc"
                        name="nombre"
                        onChange={handleChange}
                        value={nombre}
                    />
                </Form.Group>
            </Col>

            <Col md={6}>
            <Form.Group>
                    <Form.Label htmlFor="categoria">
                        Categoría Bebida
                    </Form.Label>
                    <Form.Select
                        id="categoria"
                        name="categoria"
                        value={categoria}
                        onChange={handleChange}
                    >
                        <option >-- Seleccione Categoría --</option>
                        {categorias.map(categoria => (
                            <option
                                key={categoria.strCategory}
                                value={categoria.strCategory}
                            >
                                {categoria.strCategory}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </Col>
        </Row>

        <Row className="align-items-baseline my-3">
            <Col md={9} className="justify-content-start">
               {alerta &&
                    <Alert 
                        variant='danger'
                        className="w-75 p-2 text-center"
                    >{alerta}
                    </Alert>
                }
            </Col>

            <Col md={3} className="justify-content-end">
                <Button
                    variant='secondary'
                    className='text-uppercase w-100'
                    type="submit"
                >
                    Buscar Bebidas
                </Button>
            </Col>
        </Row>
    </Form>
  )
}

export default Formulario