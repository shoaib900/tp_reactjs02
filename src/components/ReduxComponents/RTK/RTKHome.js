import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { decNumber, incNumber, incrementByAmount } from './redux/counterSlice';


const RTKHome = () => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    console.log(counter)
  return (
    <div>
        <h1> RTK home page : {counter} </h1>
        <br />
        <button onClick={()=> dispatch(incNumber() ) }>increment</button>
        <button onClick={()=> dispatch(decNumber() ) }>increment</button>
        <hr />
        <button onClick={()=> dispatch(incrementByAmount(5) ) }>increment by 5</button>
      
    </div>
  )
}

export default RTKHome
