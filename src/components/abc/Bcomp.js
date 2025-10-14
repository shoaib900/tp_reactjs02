import React from 'react'
import Ccomp from './Ccomp'

const Bcomp = ({number}) => {
  return (
    <div>
        <h1> b component </h1>
        <Ccomp  number={number} />
      
    </div>
  )
}

export default Bcomp
