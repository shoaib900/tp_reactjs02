import React, { useEffect, useState } from 'react'
import { db } from './config/fbConfig';
import { collection, deleteDoc, getDocs,doc, addDoc, updateDoc } from 'firebase/firestore';

const FBHome = () => {
    const [username, setUsername] = useState("");
    const [age, setAge] = useState("");
    const [id,setId] = useState("");
    const [errmsg,setErrmsg] = useState("");

    const [data, setData] = useState([]);

    const collectionRef = collection(db, "users");

    useEffect(() => {
        const getData = async () => {
            const dbval = await getDocs(collectionRef);
            setData(dbval.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        }
        getData();
    }, [data])



    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("hello world", username, age)
        // const addUser = addDoc(collectionRef,{name:username,age:age})
        // await addUser
        if(id === ""){
            if((username === "" && age === "") || username === "" || age === ""){
                console.log("your one or both input fields are empty")
                setErrmsg("your one or both input fields are empty")

            }else{
                await addDoc(collectionRef,{name:username,age:age})
                setErrmsg("");
            }
        }else{
            const updateUser = doc(collectionRef,id)
            await updateDoc(updateUser,{name:username,age:age})
        }

        setUsername("");
        setAge("");
        setId("");
        console.log(data);
    }

    const handleEdit = (id,username,age)=>{
        console.log(id,username,age)
        setUsername(username);
        setAge(age);
        setId(id);
    }


    const handleDelete =async (id)=> {
        const del = doc(db,"users",id);
        await deleteDoc(del);

    }
    return (
        <div>
            <h1>hello firebase</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter the name" />

                <input type="number" value={age} onChange={(e) => setAge(parseInt(e.target.value))} placeholder="Enter the age" />
                {(id === "") ?   <button>Add user</button> : <button>update user</button>  }
              
            </form>

            {(errmsg === "") ? "" : <p style={{color:"tomato"}}>{errmsg} </p>}

            <div>
                {data.map((value, index) => {
                    return (
                        <div key={index}>
                            <p>{value.name} {value.age} <button onClick={() => handleDelete(value.id)}>Delete</button> <button onClick={()=> handleEdit(value.id,value.name,value.age)}>Edit user</button> </p>

                        </div>
                    )
                })}
            </div>


        </div>
    )
}

export default FBHome
