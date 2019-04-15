import React, { Component } from 'react'

class Formulario extends Component {
    state = {
        cantidad: '',
        plazo: ''
    }

  actualizarState = (e) => {
      //leer los datos del formulario, pasar la "e" del evento y aplucar destructuring para obtener los valores
      const { name, value } = e.target
      //actualizar el state pasando valor y nombre obtendremos los nombres que se asiganron en el formulario
      this.setState({
          [name] : Number(value)
      }) 
  }

  habilitarSubmit= () => {
      //aplicar destructuring
    const {cantidad, plazo} = this.state;
      //leer datos
    const noValido = !cantidad || !plazo;
      //retornar respuesta
      console.log(noValido)
    return noValido;

  }

  render() {
      //aplicar destructuring a state para obtener los valores del state
      const {cantidad} = this.state;
    return (
        <form>
            <div>
            <label>Cantidad Prestamo:</label>
            <input 
                onChange={ this.actualizarState }
                type="number" 
                name="cantidad" 
                className="u-full-width" 
                placeholder="Ejemplo: 3000">
            </input>
            </div>
            <div>
                <label>Plazo para pagar</label>
                <select name="plazo" className="u-full-width" onChange={ this.actualizarState }>
                    <option value="">Seleccionar</option>
                    <option value="3">3 Meses</option>
                    <option value="6">6 Meses</option>
                    <option value="12">12 Meses</option>
                    <option value="24">24 Meses</option>
                </select>
            </div>
            <div>
                <input 
                    disabled={this.habilitarSubmit()}
                    type="submit" 
                    value="Calcular" 
                    className="u-full-width button-primary">
            </input>
            </div>
        </form>

    )
  }
}

export default Formulario
