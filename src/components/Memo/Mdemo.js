import React, { useMemo, useState } from 'react'

const Mdemo = () => {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(1);

    // const multiply = ()=>{
    //     console.log("data rendered");
    //     return number * 5;
    // }

    const multiply = useMemo(() => {
        console.log("data rendered");
        return number * 5;
    },[number])

    return (
        <div>
            <h1> hello Memo hook count: {count}  number: {number} :: {multiply} </h1>
            <br />
            <button onClick={() => setCount(count + 1)}>increment</button>
            <hr />
            <button onClick={() => setNumber(number + 5)}>add 5 on number</button>

        </div>
    )
}

export default Mdemo
