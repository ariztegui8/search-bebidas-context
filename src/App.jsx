import {Container} from 'react-bootstrap'
import Formulario from './components/Formulario';
import ListadoBebidas from './components/ListadoBebidas';
import ModalBebida from './components/ModalBebida';
import { BebidasProvider } from './context/BebidasProvider';
import { CategoriaProvider } from './context/CategoriaProvider';

function App() {
  return (
    <CategoriaProvider>
      <BebidasProvider>
        <header className="py-5 text-center bg-secondary text-white">
          <h1>Buscador de Bebidas</h1>
        </header>

        <Container className='mt-5'>
          <Formulario />

          <ListadoBebidas />

          <ModalBebida />
          
        </Container>
      </BebidasProvider>
    </CategoriaProvider>
  );
}

export default App;
