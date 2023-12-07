import Informacion from "./components/Informacion";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // aqui vamos a agregar la logica del componente 

  return (
    // aqui va un poquito de logica 
    // luego va el maquetado del componente 
    <section className="container my-4">
      <h1 className="display-3 text-center mb-3">PrimerApp React</h1>
      <Informacion tituloSecundario = 'Este titulo fue creado con un props'/>
    </section>
  )
}

export default App
