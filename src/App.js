import React, { Component, Fragment } from 'react';//Fragment para retornar varios tag sin meterlos en un div
import './normalize.css';
import './skeleton.css'
import Formulario from './componentes/Formulario.js'


class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>Cotizador de prestamos</h1>
        <div className="container">
          <Formulario></Formulario>
        </div>
      </Fragment>
    );
  }
}

export default App;
