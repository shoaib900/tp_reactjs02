import React from 'react'
import Bcomp from './Bcomp'

const Acomp = ({number}) => {
  return (
    <div>
        <h1> a component </h1>
        <Bcomp number={number}  />
      
    </div>
  )
}

export default Acomp
