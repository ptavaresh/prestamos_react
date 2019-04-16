import React, { Component, Fragment } from 'react';//Fragment para retornar varios tag sin meterlos en un div
import './normalize.css';
import './skeleton.css'
import Formulario from './componentes/Formulario.js'
import { calcularTotal } from './helpers.js'
import Resultado from './componentes/Resultado.js'
import Mensaje from './componentes/Mensaje';
import Spinner from './componentes/Spinner';

class App extends Component {

  state = {
    total: '',
    cantidad: '',
    plazo: '',
    cargando: false,
  }
  
  datosPrestamo = (cantidad, plazo) => {
    const total = calcularTotal(cantidad, plazo);
//colocal el resultado en el state junto a la cantidad y el plazo
this.setState({
  cargando: true
}, () => {
    setTimeout(() => {
      this.setState({
        total,
        cantidad,
        plazo,
        cargando: false
      })
    }, 3000)
})
  }

  render() {
    //obteniendo datos antes del rendering
    const {total, cantidad, plazo, cargando} = this.state;

    //cargar un componente condicionalmente
    let componente;
    
    if(total === '' && !cargando) {
        componente = <Mensaje />
    } else if(cargando) {
        componente = <Spinner />
    } else {
        componente = <Resultado
        total={total}
        cantidad={cantidad}
        plazo={plazo}/>
    }

    return (
      <Fragment>
        <h1>Cotizador de prestamos</h1>
        <div className="container">
          <Formulario
            datosPrestamo={this.datosPrestamo}
          />
        <div className="mensajes">
           {componente}
            
          </div>
          
        </div>
      </Fragment>
    );
  }
}

export default App;
