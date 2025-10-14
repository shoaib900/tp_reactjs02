import React, { useState, useEffect } from 'react'

const About = () => {
    const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //         .then(response => response.json())
    //         .then(json => setData(json))
    // }, [])


    console.log(data)



    return (
        <div>
            <h1> about page</h1>
            {
                data.map( value => {
                    return (
                        <div key={value.id}>
                            <h1>{value.id} : <span style={{color:"red"}}>{value.title} </span>  </h1>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default About
