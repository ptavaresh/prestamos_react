//componente sin estaado usalmente solo para generar jsx
import React from 'react'

const Resultado = (props) => {
    console.log(props)
  return (
    <div className="u-full-width resultado">
        <h2>Resultados</h2>
        <p>La cantidad solicitada fue: $ ${props.cantidad}</p>
        <p>A pagar en: ${props.plazo} Meses</p>
        <p>Total a pagar: $ ${props.total} meses</p>
        <p>Sou pago mensual es de: $ ${(props.total / props.plazo).toFixed(2)}</p>
    </div>
  );
}

export default Resultado
