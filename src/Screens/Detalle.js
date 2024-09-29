import React from 'react'
import Detalles from '../Components/Detalles/Detalles'

export default function Detalle(props) {
  const id = props.match.params.id
  return (
    <div>
      <Detalles id={id} />
    </div>
  )
}
