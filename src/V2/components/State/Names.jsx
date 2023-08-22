import { useState } from "react";

export const Name =()=>{
     //using normal js variable
    let username='default user';
    const PrintName=()=>{
        console.log('logging in', username);
        username= 'vipin';
        console.log('logging out', username);
    }
//using state
let [user, setUser]=useState('Guest');
let [email, setEmail]=useState('default900@email.com')
const updateName=()=>{
    setUser('Vipin Chauhan');
}
const updateEmail=()=>{
    setEmail('vipinChauhan@gmail.com');
}
const updateEmailandName=()=>{
    setEmail('RajuChauhan@gmail.com');
    setUser( 'Raju Chauhan');
}
    return(
        <section style={{margn:'20px'}}>
        <p>Name</p>
        <button onClick={PrintName}>Login</button>
        <p>{username}</p>
        <br/>
        <br/>
        <br/>
        <p>{user}</p>
        <button onClick={updateName}>login using state</button>
        <br/>
        <br/>
        <br/>
        <p>{email}</p>
        <button onClick={updateEmail}>login using state</button>
        <br/>
        <br/>
        <button onClick={updateEmailandName}>login using state</button>
        </section>
    )
}