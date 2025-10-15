import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { decNumber, incNumber } from './redux/actions/action';

const SHome = () => {
    const counter = useSelector( state => state.counter)
    const dispatch = useDispatch();

    console.log(counter)

  return (
    <div>
        <h1> simple redux method : {counter} </h1>
        <br />
        <button onClick={()=> dispatch(incNumber() )}>increment</button>
        <button onClick={()=> dispatch(decNumber() )}>decrement</button>
      
    </div>
  )
}

export default SHome
