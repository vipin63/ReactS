import { useState } from "react"
 export const UserInfo =()=>{
    {/*const [name, setName]=useState('vipin chauhan');
    const [email, setEmail]=useState('Vipinchauhan90000@gmail.com');
 const [batch, setBatch]=useState('2023-2024');*/}
 const [days, setDays]=useState(["mon", "tue", "wed"])
 const [user, setUser]=useState({
    name:'vipin Rajput',
    email:'vipinRajput@gmail.com',
    batch:'2023-2024'

 })
    const UpdateName=()=>{
        //setName('new Name')
        {/* setUser({
            name:"Raju bhai",
            email:'vipinRajput@gmail.com',
            batch:'2023-2024'
        }) */}
     setUser({
        ...user,
        name:"Raju bhai"
     })
    }
    const UpdateEmail=()=>{
        //setEmail('newEmail@gmail.com')
       {/* setUser({
            name:"Raju bhai",
            email:'RajuBhai@gmail.com',
            batch:'2023-2024'

        })*/}
        setUser({
            ...user,
            email:'RajuBhai@gmail.com',
            
        })
    }
    const addClass=()=>{
        setDays([...days,"Thrusday"])
    }


    return(
        <section>
            <h2>User Information</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Batch: {user.batch}</p>
            <p>Classes: {days.join(", ")}</p>
            <button onClick={UpdateName}>Update Name</button>
            <br/>
            <br/>
            <button onClick={UpdateEmail}>Update Email</button>
            <br/>
            <br/>
            <button onClick={addClass}>Add classes</button>
        </section>
    )
}