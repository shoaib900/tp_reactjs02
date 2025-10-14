import React,{useContext} from 'react'
import {Name} from "./Acomp"

const Ccomp = () => {

    var name = useContext(Name);
  return (
    <div>
        <h1> C component {name} </h1>

      
    </div>
  )
}

export default Ccomp
