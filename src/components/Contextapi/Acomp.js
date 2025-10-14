import React, { useState,createContext } from 'react'
import Bcomp from './Bcomp'

export const Name = createContext();

const Acomp = () => {

    const [number, setNumber] = useState(400)

  return (
    <Name.Provider value={number}>

        <h1> A component </h1>

        <Bcomp  />
      
    </Name.Provider>
  )
}

export default Acomp
