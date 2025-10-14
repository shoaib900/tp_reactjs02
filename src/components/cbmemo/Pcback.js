import React, {useCallback, useState} from 'react'
import Childcb from './Childcb';

const Pcback = () => {
    const [count,setCount] = useState(0);
    const [name,setName] = useState("asim")

    console.log("Parent rendered")

    // function changeNumber(){
    //     setCount(count + 1);
    // }

    const changeName =()=>{
      setName("atif")
    }

    const changeNumber= useCallback( ()=> {
        setCount(count + 1)
    },[count])


  return (
    <div>
        <h1> parent data {count}</h1>
        <button onClick={changeNumber}>count change</button>

        <hr />

        <Childcb  />
      
    </div>
  )
}

export default Pcback
