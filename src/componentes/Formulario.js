import React, { Component } from 'react'

class Formulario extends Component {
    state = {}
  render() {
    return (
        
      
        <form>
            <div>
            <label>Cantidad Prestamo:</label>
            <input type="number" name="cantidad" className="u-full-width" placeholder="Ejemplo: 3000"></input>
            </div>
            <div>
                <label>Plazo para pagar</label>
                <select name="plazo" className="u-full-width">
                    <option value="">Seleccionar</option>
                    <option value="3">3 Meses</option>
                    <option value="6">6 Meses</option>
                    <option value="12">12 Meses</option>
                    <option value="24">24 Meses</option>
                </select>
            </div>
            <div>
                <input type="submit" value="Calcular" className="u-full-width button-primary"></input>
            </div>
        </form>

    )
  }
}

export default Formulario
