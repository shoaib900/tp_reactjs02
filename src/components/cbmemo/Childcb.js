import React,{memo, useState} from 'react'

const Childcb = () => {
    const [name,setName] = useState("asim")

    console.log("child rendered...")

    const changeName = ()=>{
        setName("atif" )
    }
  return (
    <div>

        <h1> change the name : {name}</h1>
        <button onClick={changeName}> change the name</button>
      
    </div>
  )
}

export default memo(Childcb)
